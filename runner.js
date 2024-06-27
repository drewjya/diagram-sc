const POOL_MARGIN = 50;

const SWIMLANE_SIZE = {
  width: 450,
  height: 1600,
  collapsedWidth: 50,
};

const pool = new UMLPool({
  attrs: {
    label: {
      text: PROJECT_TILE,
    },
  },
});
pool.addTo(graph);

//GANTI
const SWIMLANES = [
  {
    title: "User",
    color: "#FFFFFF",
    text: "#000000",
    mainColor: "#FFFFFF",
  },
  {
    title: "System",
    color: "#FFFFFF",
    text: "#000000",
    mainColor: "#FFFFFF",
  },
];

const swimlanes = SWIMLANES.map((swimlane, index) => {
  const swimlaneEl = new UMLSwimlane({
    attrs: {
      label: {
        text: swimlane.title,
        fill: swimlane.text || "#333",
      },
      header: {
        fill: swimlane.color,
      },
      body: {
        fill: swimlane.mainColor,
      },
      button: {
        fill: swimlane.mainColor,
      },
      buttonSign: {
        stroke: swimlane.text || "#333",
      },
    },
  });
  pool.embed(swimlaneEl);
  swimlaneEl.addTo(graph);
  return swimlaneEl;
});

const [user, system] = swimlanes;

// Collapse one of the swimlanes to show the collapsed state
// president.toggleCollapse();

requestFindingDeletion();
// Setup collapse/expand of swimlanes.

paper.on("swimlane:collapse", ({ model: swimlane }, evt) => {
  evt.stopPropagation();
  swimlane.toggleCollapse();
  pool.layoutSwimlanes(swimlanes);
});

pool.layoutSwimlanes(swimlanes);

// Fit the pool on the screen.

paper.scaleContentToFit({
  contentArea: new g.Rect(
    0,
    0,
    POOL_MARGIN * 2 + swimlanes.length * SWIMLANE_SIZE.width,
    // When scaling the content, do not take the height of the pool
    // into account. This way, the pool will match the width of the
    // screen and the height will overflow the screen.
    1
  ),
});

paper.fitToContent({
  contentArea: new g.Rect(
    -POOL_MARGIN,
    -POOL_MARGIN,
    POOL_MARGIN * 2 +
      swimlanes.length * SWIMLANE_SIZE.width -
      /* scrollbar */ 20,
    POOL_MARGIN * 3 + SWIMLANE_SIZE.height + HEADER_HEIGHT
  ),
  allowNewOrigin: "any",
});

// Add custom highlighter to all links to emphasize the link end when the link
// connects a swimlane.
const LinkEndHighlighter = dia.HighlighterView.extend({
  MOUNTABLE: true,
  tagName: "rect",
  attributes: {
    width: 20,
    height: 20,
    y: -10,
    rx: 2,
    ry: 2,
    fill: "#fff",
    stroke: "#fff",
    "stroke-width": 2,
    "fill-opacity": 0.3,
  },
  highlight: function (linkView) {
    const link = linkView.model;
    const source = link.getSourceElement();
    const target = link.getTargetElement();
    let anchor, offset;
    if (source.isHidden()) {
      anchor = linkView.sourceAnchor;
      offset = anchor.x > target.position().x ? 0 : -this.attributes.width;
    } else if (target.isHidden()) {
      anchor = linkView.targetAnchor;
      offset = anchor.x > source.position().x ? 0 : -this.attributes.width;
    } else {
      this.el.setAttribute("display", "none");
      return;
    }
    this.el.removeAttribute("display");
    // Position the rectangle at the end of the link over the swimlane
    // (the parent of the hidden element)
    this.el.setAttribute(
      "transform",
      `translate(${anchor.x + offset},${anchor.y})`
    );
  },
});

graph.getLinks().forEach((link) => {
  LinkEndHighlighter.add(link.findView(paper), "root", "end-marker");
});

// A custom orthogonal router (It will be available in version 3.7).

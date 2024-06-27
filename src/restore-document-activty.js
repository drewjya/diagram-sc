PROJECT_TILE = "Restore Document Activity Activity";

function restoreDocumentActivity() {
  const initialNode = createInitialNode(210, 25, user);
  const loginNode = createActivity("Login", 125, 100, user);
  createLink(
    initialNode,
    loginNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
  const redirectNode = createActivity(
    "Redirect To\nHome Page",
    125,
    100,
    system
  );
  createLink(
    loginNode,
    redirectNode,
    { sourceSide: "right" },
    { targetSide: "left" }
  );

  const connectToSocket = createActivity(
    "Connect to\nSocket.io",
    125,
    200,
    system
  );
  createLink(
    redirectNode,
    connectToSocket,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const broadcastProject = createActivity(
    "Broadcast User\nProjects",
    125,
    300,
    system
  );
  createLink(
    connectToSocket,
    broadcastProject,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const displayUserProject = createActivity(
    "Display User\nProjects",
    125,
    400,
    system
  );
  createLink(
    broadcastProject,
    displayUserProject,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const clickSpecificProject = createActivity(
    "Click Specific\nProject",
    125,
    450,
    user
  );
  createLink(
    displayUserProject,
    clickSpecificProject,
    { sourceSide: "bottom" },
    { targetSide: "right" }
  );
  const subscribeToProject = createActivity(
    "Subscribe To\nProject Event",
    125,
    510,
    system
  );

  createLink(
    clickSpecificProject,
    subscribeToProject,
    { sourceSide: "bottom" },
    { targetSide: "left" }
  );

  const displayProjectDetail = createActivity(
    "Display Project Detail",
    125,
    600,
    system
  );
  createLink(
    subscribeToProject,
    displayProjectDetail,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const cliskSpecificSubproject = createActivity(
    "Click Specific\nSubproject",
    125,
    600,
    user
  );

  createLink(
    displayProjectDetail,
    cliskSpecificSubproject,
    { sourceSide: "left" },
    { targetSide: "right" }
  );

  const subscribeToSubprojectEvent = createActivity(
    "Subscriibe To\nSubproject Event",
    125,
    700,
    system
  );

  createLink(
    cliskSpecificSubproject,
    subscribeToSubprojectEvent,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
  const displaySubprojectDetail = createActivity(
    "Display Subproject\nDetail",
    125,
    700,
    user
  );
  createLink(
    subscribeToSubprojectEvent,
    displaySubprojectDetail,
    { sourceSide: "left" },
    { targetSide: "right" }
  );

  const clickSpecificFinding = createActivity(
    "Click Specific\nFinding",
    125,
    795,
    user
  );

  createLink(
    displaySubprojectDetail,
    clickSpecificFinding,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const subscribeFindingEvent = createActivity(
    "Subscribe Finding\nEvent",
    125,
    795,
    system
  );

  createLink(
    clickSpecificFinding,
    subscribeFindingEvent,
    { sourceSide: "right" },
    { targetSide: "left" }
  );

  const displayFindingDetailActivity = createActivity(
    "Display Finding\nDetail",
    125,
    895,
    system
  );
  createLink(
    subscribeFindingEvent,
    displayFindingDetailActivity,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const clickDiscussionTab = createActivity(
    "Edit Finding Document",
    125,
    895,
    user
  );
  createLink(
    displayFindingDetailActivity,
    clickDiscussionTab,
    { sourceSide: "left" },
    { targetSide: "right" }
  );

  const clickSaveDocument = createActivity(
    "Click Document\nVersions",
    125,
    995,
    user
  );
  createLink(
    clickDiscussionTab,
    clickSaveDocument,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const selectChosenDocument = createActivity(
    "Select Old Document\nVersion",
    125,
    1095,
    user
  );
  createLink(
    clickSaveDocument,
    selectChosenDocument,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const restoreClick = createActivity("Click Restore", 125, 1195, user);
  createLink(
    selectChosenDocument,
    restoreClick,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const displayFindingDiscussion = createActivity(
    "Save Document History",
    125,
    1195,
    system
  );

  createLink(
    restoreClick,
    displayFindingDiscussion,
    { sourceSide: "right" },
    { targetSide: "left" }
  );
  const clickAddDiscussion = createActivity(
    "Broadcast to\nFinding Event",
    125,
    1295,
    system
  );

  createLink(
    displayFindingDiscussion,
    clickAddDiscussion,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const finishNode = createEndNode(210, 1385, system);
  createLink(
    clickAddDiscussion,
    finishNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
}

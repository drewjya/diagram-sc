PROJECT_TILE = "Update Subproejct Information Activity";

function updateSubprojectData() {
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

  const clickAddFinding = createActivity(
    "Edit Subproject\nInformation",
    125,
    795,
    user
  );

  createLink(
    displaySubprojectDetail,
    clickAddFinding,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const confirmCreateFinding = createActivity(
    "Update Subproject\nInformation",
    125,
    895,
    system
  );

  createLink(
    clickAddFinding,
    confirmCreateFinding,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const broadcastSubprojectProject = createActivity(
    "Broadcast To Project\nMember",
    125,
    1005,
    system
  );
  createLink(
    confirmCreateFinding,
    broadcastSubprojectProject,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const finishNode = createEndNode(210, 1105, system);
  createLink(
    broadcastSubprojectProject,
    finishNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
}

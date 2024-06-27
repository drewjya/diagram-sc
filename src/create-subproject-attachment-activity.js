PROJECT_TILE = "Create Subproject Attachment Activity";
function createSubprojectAttachment() {
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
    800,
    system
  );
  createLink(
    subscribeToSubprojectEvent,
    displaySubprojectDetail,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
  const clickAddSubProject = createActivity(
    "Click Report &\nAttachment Tab",
    125,
    800,
    user
  );

  createLink(
    displaySubprojectDetail,
    clickAddSubProject,
    { sourceSide: "left" },
    { targetSide: "right" }
  );

  const inputProjectNode = createActivity(
    "Upload Subproject\nAttachment Data",
    125,
    900,
    user
  );

  createLink(
    clickAddSubProject,
    inputProjectNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const saveDateNode = createActivity("Save Uploaded\nData", 125, 900, system);

  createLink(
    inputProjectNode,
    saveDateNode,
    { sourceSide: "right" },
    { targetSide: "left" }
  );

  const broadcastSubprojectProject = createActivity(
    "Broadcast To Subproject\nMember",
    125,
    1025,
    system
  );
  createLink(
    saveDateNode,
    broadcastSubprojectProject,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );

  const finishNode = createEndNode(210, 1125, system);
  createLink(
    broadcastSubprojectProject,
    finishNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
}

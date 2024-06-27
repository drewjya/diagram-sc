PROJECT_TILE = "Send Chat Discussion Activity";

function sendChatDiscussionDiagram() {
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
    "Click Discussion Tab",
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
  const displayFindingDiscussion = createActivity(
    "Display Finding\nDiscussion",
    125,
    995,
    system
  );

  createLink(
    clickDiscussionTab,
    displayFindingDiscussion,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
  const clickSpecificDiscussion = createActivity(
    "Click Specific\nDiscussion",
    125,
    995,
    user
  );

  createLink(
    displayFindingDiscussion,
    clickSpecificDiscussion,
    { sourceSide: "left" },
    { targetSide: "right" }
  );

  const displayDiscussionDetail = createActivity(
    "Display Discussion\nDetail",
    125,
    1085,
    system
  );

  createLink(
    clickSpecificDiscussion,
    displayDiscussionDetail,
    { sourceSide: "bottom" },
    { targetSide: "left" }
  );

  const sendChat = createActivity("Send New Chat", 125, 1135, user);

  createLink(
    displayDiscussionDetail,
    sendChat,
    { sourceSide: "bottom" },
    { targetSide: "right" }
  );

  const saveChat = createActivity("Send Chat", 125, 1200, system);
  createLink(
    sendChat,
    saveChat,
    { sourceSide: "bottom" },
    { targetSide: "left" }
  );

  const finishNode = createEndNode(210, 1305, system);
  createLink(
    saveChat,
    finishNode,
    { sourceSide: "bottom" },
    { targetSide: "top" }
  );
}

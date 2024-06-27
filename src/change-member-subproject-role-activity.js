PROJECT_TILE = "Change Member Subproject Role Activity";

function changeMemberSubprojectRole() {
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
  
    const clickSpecificSubproject = createActivity(
      "Click Specific\nSubproject",
      125,
      600,
      user
    );
  
    createLink(
      displayProjectDetail,
      clickSpecificSubproject,
      { sourceSide: "left" },
      { targetSide: "right" }
    );
  
    const subscribeToSubprojectEvent = createActivity(
      "Subscribe Subproject\nEvent",
      125,
      675,
      system
    );
    createLink(
      clickSpecificSubproject,
      subscribeToSubprojectEvent,
      { sourceSide: "bottom" },
      { targetSide: "left" }
    );
  
    const displaySubprojectDetail = createActivity(
      "Display Subproject\nDetail",
      125,
      755,
      system
    );
  
    createLink(
      subscribeToSubprojectEvent,
      displaySubprojectDetail,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const clickMemberTab = createActivity("Click Member Tab", 125, 875, user);
    createLink(
      displaySubprojectDetail,
      clickMemberTab,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const clickSelectedMemberRole = createActivity(
      "Click Selected\nMember Role",
      125,
      975,
      user
    );
    createLink(
      clickMemberTab,
      clickSelectedMemberRole,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const clickSendRequest = createActivity(
      "Select Role\nTo Change",
      125,
      1075,
      user
    );
    createLink(
      clickSelectedMemberRole,
      clickSendRequest,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const saveNewProject = createActivity(
      "Save Updated\n Member Role",
      125,
      1075,
      system
    );
    createLink(
      clickSendRequest,
      saveNewProject,
      { sourceSide: "right" },
      { targetSide: "left" }
    );
  
    const broadcastProjectEvent = createActivity(
      "Broadcast Subroject\nEvent",
      125,
      1175,
      system
    );
    createLink(
      saveNewProject,
      broadcastProjectEvent,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const finishNode = createEndNode(210, 1275, system);
    createLink(
      broadcastProjectEvent,
      finishNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  }
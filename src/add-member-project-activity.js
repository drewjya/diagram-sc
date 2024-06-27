PROJECT_TILE = "Add Member Project Activity";

function addMemberProjectActivity() {
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
  
    const clickMemberTab = createActivity("Click Member Tab", 125, 600, user);
  
    createLink(
      displayProjectDetail,
      clickMemberTab,
      { sourceSide: "left" },
      { targetSide: "right" }
    );
  
    const displayProjectMemberList = createActivity(
      "Display Project\nMember List",
      125,
      675,
      system
    );
  
    createLink(
      clickMemberTab,
      displayProjectMemberList,
      { sourceSide: "bottom" },
      { targetSide: "left" }
    );
  
    const clickInviteMember = createActivity("Click Invite", 125, 775, user);
    createLink(
      displayProjectMemberList,
      clickInviteMember,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const fillMemberRequirement = createActivity(
      "Fill Member\nRequirement",
      125,
      875,
      user
    );
    createLink(
      clickInviteMember,
      fillMemberRequirement,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const clickSendRequest = createActivity("Klick Send", 125, 975, user);
    createLink(
      fillMemberRequirement,
      clickSendRequest,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const saveNewProject = createActivity(
      "Save New\nProject Member",
      125,
      975,
      system
    );
    createLink(
      clickSendRequest,
      saveNewProject,
      { sourceSide: "right" },
      { targetSide: "left" }
    );
  
    const broadcastProjectEvent = createActivity(
      "Broadcast Project Event\nto Project Member",
      125,
      1075,
      system
    );
    createLink(
      saveNewProject,
      broadcastProjectEvent,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const finishNode = createEndNode(210, 1175, system);
    createLink(
      broadcastProjectEvent,
      finishNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  }
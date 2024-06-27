PROJECT_TILE = "Create Finding Activity";

function createFinding() {
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
  
    const clickAddFinding = createActivity("Click Add\nFinding", 125, 795, user);
  
    createLink(
      displaySubprojectDetail,
      clickAddFinding,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const confirmCreateFinding = createActivity(
      "Confirm Create\nFinding",
      125,
      895,
      user
    );
  
    createLink(
      clickAddFinding,
      confirmCreateFinding,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const confirmFinding = createDecision(200, 995, user);
    createLink(
      confirmCreateFinding,
      confirmFinding,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
    const noNode = createEndNode(210, 1075, user);
    createLink(
      confirmFinding,
      noNode,
      { sourceSide: "bottom" },
      { targetSide: "top" },
      "No"
    );
    const yesNode = createActivity("Create Finding Data", 125, 995, system);
    createLink(
      confirmFinding,
      yesNode,
      { sourceSide: "right" },
      { targetSide: "left" },
      "Yes"
    );
  
    const broadcastSubprojectProject = createActivity(
      "Broadcast To Project\nMember",
      125,
      1075,
      system
    );
    createLink(
      yesNode,
      broadcastSubprojectProject,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const finishNode = createEndNode(210, 1175, system);
    createLink(
      broadcastSubprojectProject,
      finishNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  }
  
PROJECT_TILE = "Create Subproject Activity";
function createSubproject() {
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
  
    const clickAddSubProject = createActivity(
      "Click Add\nSubproject",
      125,
      600,
      user
    );
  
    createLink(
      displayProjectDetail,
      clickAddSubProject,
      { sourceSide: "left" },
      { targetSide: "right" }
    );
  
    const inputProjectNode = createActivity(
      "Input Subproject\nInfo",
      125,
      700,
      user
    );
  
    createLink(
      clickAddSubProject,
      inputProjectNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
    const clickSaveNode = createActivity("Click Save", 125, 785, user);
    createLink(
      inputProjectNode,
      clickSaveNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const saveDateNode = createActivity("Save Uploaded\nData", 125, 775, system);
  
    createLink(
      clickSaveNode,
      saveDateNode,
      { sourceSide: "right" },
      { targetSide: "left" }
    );
  
    const broadcastSubprojectProject = createActivity(
      "Broadcast To Project\nMember",
      125,
      875,
      system
    );
    createLink(
      saveDateNode,
      broadcastSubprojectProject,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  
    const finishNode = createEndNode(210, 975, system);
    createLink(
      broadcastSubprojectProject,
      finishNode,
      { sourceSide: "bottom" },
      { targetSide: "top" }
    );
  }
  
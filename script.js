window.addEventListener("load", function () {
    // --- Background Music Handling ---
    const bgAudio = document.getElementById("bg-audio");
    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function () {
      if (bgAudio.paused) {
        bgAudio.play();
      }
    });
  
    // --- Page 1 Elements ---
    const message1 = document.querySelector(".message1");
    const message2 = document.querySelector(".message2");
    const message3 = document.querySelector(".message3");
    const message4 = document.querySelector(".message4");
    const page1 = document.querySelector(".page1");
    const page2 = document.querySelector(".page2");
  
    // --- Scene 1 Elements ---
    const memoryImage = document.querySelector(".memory-image");
    const scene1TextContainer = document.querySelector(".text-container.scene1");
    const text1 = document.querySelector(".text-message.text1");
    const text2 = document.querySelector(".text-message.text2");
  
    // --- Scene 2 Elements ---
    const memoryImage2 = document.querySelector(".memory-image2");
    const scene2TextContainer = document.querySelector(".text-container.scene2");
    const scene2Text1 = document.querySelector(".text-message.scene2-text1");
    const scene2Text2 = document.querySelector(".text-message.scene2-text2");
  
    // --- Scene 3 Elements ---
    const memoryImage3 = document.querySelector(".memory-image3");
    const scene3TextContainer = document.querySelector(".text-container.scene3");
    const scene3Text1 = document.querySelector(".text-message.scene3-text1");
  
    // --- Scene 4 Elements ---
    const memoryImage4 = document.querySelector(".memory-image4");
    const scene4TextContainer = document.querySelector(".text-container.scene4");
    const scene4Text1 = document.querySelector(".text-message.scene4-text1");
    const scene4Text2 = document.querySelector(".text-message.scene4-text2");
  
    // --- Scene 5 Elements ---
    const memoryImage5 = document.querySelector(".memory-image5");
    const scene5TextContainer = document.querySelector(".text-container.scene5");
    const scene5Text1 = document.querySelector(".text-message.scene5-text1");
    const scene5Text2 = document.querySelector(".text-message.scene5-text2");
    const scene5Text3 = document.querySelector(".text-message.scene5-text3");
    const scene5Text4 = document.querySelector(".text-message.scene5-text4");
  
    // --- Scene 6 Elements ---
    const memoryImage6 = document.querySelector(".memory-image6");
    const scene6TextContainer = document.querySelector(".text-container.scene6");
    const scene6Text1 = document.querySelector(".text-message.scene6-text1");
    const scene6Text2 = document.querySelector(".text-message.scene6-text2");
  
    // --- Scene 7 Elements ---
    const memoryImage7 = document.querySelector(".memory-image7");
    const scene7TextContainerLeft = document.querySelector(".text-container.scene7-left");
    const scene7TextContainerRight = document.querySelector(".text-container.scene7-right");
    const scene7Text1 = document.querySelector(".text-message.scene7-text1");
    const scene7Text2 = document.querySelector(".text-message.scene7-text2");
  
    // --- Scene 8 Elements ---
    const memoryImage8 = document.querySelector(".memory-image8");
    const scene8TextContainerLeft = document.querySelector(".text-container.scene8-left");
    const scene8TextContainerRight = document.querySelector(".text-container.scene8-right");
    const scene8Text1 = document.querySelector(".text-message.scene8-text1");
    const scene8Text2 = document.querySelector(".text-message.scene8-text2");
  
    // --- Scene 9 Elements (Final Scene: Text Only) ---
    const scene9Container = document.querySelector(".text-container.scene9");
    const scene9Text1 = document.querySelector(".text-message.scene9-text1");
    const scene9Text2 = document.querySelector(".text-message.scene9-text2");
    const scene9Text3 = document.querySelector(".text-message.scene9-text3");
    const scene9Text4 = document.querySelector(".text-message.scene9-text4");
    const scene9Text5 = document.querySelector(".text-message.scene9-text5");
    const scene9Text6 = document.querySelector(".text-message.scene9-text6");
  
    // --- Page 1 Message Sequence ---
    setTimeout(() => message1.classList.add("visible"), 0);
    setTimeout(() => message1.classList.remove("visible"), 4000);
    setTimeout(() => message2.classList.add("visible"), 5000);
    setTimeout(() => message2.classList.remove("visible"), 11000);
    setTimeout(() => message3.classList.add("visible"), 12000);
    setTimeout(() => message3.classList.remove("visible"), 22000);
    setTimeout(() => {
      message4.classList.add("visible");
      setTimeout(() => nextButton.classList.add("visible"), 2000);
    }, 23000);
  
    // --- Next Button Click Handler (All Scenes) ---
    nextButton.addEventListener("click", () => {
      // Transition from Page 1 to Page 2 immediately
      page1.style.transform = "translateX(-100vw)";
      page2.style.transform = "translateX(0)";
  
      // --- Scene 1 Sequence (using 2000ms delays) ---
      setTimeout(() => {
        memoryImage.classList.add("visible");
        setTimeout(() => {
          memoryImage.classList.add("move-left");
          setTimeout(() => {
            scene1TextContainer.classList.add("visible");
            text1.classList.add("visible");
            setTimeout(() => {
              text2.classList.add("visible");
              setTimeout(() => {
                text1.classList.add("fade-out");
                text2.classList.add("fade-out");
                memoryImage.classList.add("exit");
  
                // --- Scene 2 Sequence ---
                setTimeout(() => {
                  scene1TextContainer.classList.remove("visible");
                  memoryImage.style.display = "none";
                  setTimeout(() => {
                    memoryImage2.classList.add("scene2-visible");
                  }, 200);
                  setTimeout(() => {
                    scene2TextContainer.classList.add("visible");
                    scene2Text1.classList.add("visible");
                    setTimeout(() => {
                      scene2Text1.classList.add("fade-out");
                      scene2Text2.classList.add("visible");
                      setTimeout(() => {
                        scene2Text2.classList.add("fade-out");
                        memoryImage2.classList.add("scene2-exit");
  
                        // --- Scene 3 Sequence ---
                        setTimeout(() => {
                          scene2TextContainer.classList.remove("visible");
                          memoryImage2.style.display = "none";
                          setTimeout(() => {
                            memoryImage3.classList.add("scene3-visible");
                          }, 200);
                          setTimeout(() => {
                            scene3TextContainer.classList.add("visible");
                            scene3Text1.classList.add("visible");
                            setTimeout(() => {
                              scene3Text1.classList.add("fade-out");
                              memoryImage3.classList.add("scene3-exit");
  
                              // --- Scene 4 Sequence ---
                              setTimeout(() => {
                                scene3TextContainer.classList.remove("visible");
                                memoryImage3.style.display = "none";
                                setTimeout(() => {
                                  memoryImage4.classList.add("scene4-visible");
                                }, 200);
                                setTimeout(() => {
                                  scene4TextContainer.classList.add("visible");
                                  scene4Text1.classList.add("visible");
                                  setTimeout(() => {
                                    scene4Text1.classList.add("fade-out");
                                    scene4Text2.classList.add("visible");
                                    setTimeout(() => {
                                      scene4Text2.classList.add("fade-out");
                                      memoryImage4.classList.add("scene4-exit");
  
                                      // --- Scene 5 Sequence ---
                                      setTimeout(() => {
                                        scene4TextContainer.classList.remove("visible");
                                        memoryImage4.style.display = "none";
                                        setTimeout(() => {
                                          memoryImage5.classList.add("scene5-visible");
                                        }, 200);
                                        setTimeout(() => {
                                          scene5TextContainer.classList.add("visible");
                                          scene5Text1.classList.add("visible");
                                          setTimeout(() => {
                                            scene5Text1.classList.add("fade-out");
                                            scene5Text2.classList.add("visible");
                                            setTimeout(() => {
                                              scene5Text2.classList.add("fade-out");
                                              scene5Text3.classList.add("visible");
                                              setTimeout(() => {
                                                scene5Text3.classList.add("fade-out");
                                                scene5Text4.classList.add("visible");
                                                setTimeout(() => {
                                                  scene5Text4.classList.add("fade-out");
                                                  memoryImage5.classList.add("scene5-exit");
  
                                                  // --- Scene 6 Sequence ---
                                                  setTimeout(() => {
                                                    scene5TextContainer.classList.remove("visible");
                                                    memoryImage5.style.display = "none";
                                                    setTimeout(() => {
                                                      memoryImage6.classList.add("scene6-visible");
                                                    }, 200);
                                                    setTimeout(() => {
                                                      scene6TextContainer.classList.add("visible");
                                                      scene6Text1.classList.add("visible");
                                                      setTimeout(() => {
                                                        scene6Text1.classList.add("fade-out");
                                                        scene6Text2.classList.add("visible");
                                                        setTimeout(() => {
                                                          scene6Text2.classList.add("fade-out");
                                                          memoryImage6.classList.add("scene6-exit");
  
                                                          // --- Scene 7 Sequence ---
                                                          setTimeout(() => {
                                                            scene6TextContainer.classList.remove("visible");
                                                            memoryImage6.style.display = "none";
                                                            setTimeout(() => {
                                                              memoryImage7.classList.add("scene7-visible");
                                                            }, 200);
                                                            setTimeout(() => {
                                                              scene7TextContainerLeft.classList.add("visible");
                                                              scene7TextContainerRight.classList.add("visible");
                                                              scene7Text1.classList.add("visible");
                                                              // Left text stays for 3000ms
                                                              setTimeout(() => {
                                                                scene7Text1.classList.add("fade-out");
                                                              }, 3000);
                                                              // Right text appears at 4000ms then stays 4000ms before fading
                                                              setTimeout(() => {
                                                                scene7Text2.classList.add("visible");
                                                                setTimeout(() => {
                                                                  scene7Text2.classList.add("fade-out");
                                                                  memoryImage7.classList.add("scene7-exit");
                                                                }, 4000);
                                                              }, 4000);
                                                            }, 2000);
                                                          }, 2000);
  
                                                          // --- Scene 8 Sequence ---
                                                          // Changed delay from 6000ms to 13000ms after Scene 7
                                                          setTimeout(() => {
                                                            scene7TextContainerLeft.classList.remove("visible");
                                                            scene7TextContainerRight.classList.remove("visible");
                                                            memoryImage7.style.display = "none";
                                                            setTimeout(() => {
                                                              memoryImage8.classList.add("scene8-visible");
                                                            }, 200);
                                                            setTimeout(() => {
                                                              scene8TextContainerLeft.classList.add("visible");
                                                              scene8TextContainerRight.classList.add("visible");
                                                              scene8Text1.classList.add("visible");
                                                              setTimeout(() => {
                                                                scene8Text1.classList.add("fade-out");
                                                                scene8Text2.classList.add("visible");
                                                                setTimeout(() => {
                                                                  scene8Text2.classList.add("fade-out");
                                                                  memoryImage8.classList.add("scene8-exit");
                                                                }, 4000);
                                                              }, 7000);
                                                            }, 2000);
                                                          }, 13000);
  
                                                          // --- Scene 9 Sequence (Final Scene: Text Only) ---
                                                          // Changed delay from 15000ms to 28000ms after Scene 6
                                                          setTimeout(() => {
                                                            // Remove Scene 8 elements
                                                            scene8TextContainerLeft.classList.remove("visible");
                                                            scene8TextContainerRight.classList.remove("visible");
                                                            memoryImage8.style.display = "none";
                                                            // Show Scene 9 container and start sequence:
                                                            scene9Container.classList.add("visible");
                                                            setTimeout(() => {
                                                              scene9Text1.classList.add("visible");
                                                              setTimeout(() => {
                                                                scene9Text1.classList.add("fade-out");
                                                                setTimeout(() => {
                                                                  scene9Text2.classList.add("visible");
                                                                  setTimeout(() => {
                                                                    scene9Text2.classList.add("fade-out");
                                                                    setTimeout(() => {
                                                                      scene9Text3.classList.add("visible");
                                                                      setTimeout(() => {
                                                                        scene9Text3.classList.add("fade-out");
                                                                        setTimeout(() => {
                                                                          scene9Text4.classList.add("visible");
                                                                          setTimeout(() => {
                                                                            scene9Text4.classList.add("fade-out");
                                                                            setTimeout(() => {
                                                                              scene9Text5.classList.add("visible");
                                                                              setTimeout(() => {
                                                                                scene9Text5.classList.add("fade-out");
                                                                                setTimeout(() => {
                                                                                  scene9Text6.classList.add("visible");
                                                                                  // Final message remains on screen indefinitely.
                                                                                }, 4000);
                                                                              }, 4000);
                                                                            }, 5000);
                                                                          }, 4000);
                                                                        }, 4000);
                                                                      }, 4000);
                                                                    }, 0);
                                                                  }, 0);
                                                                }, 0);
                                                              }, 0);
                                                            }, 2000); // 2-second delay after Scene 8 completes
                                                          }, 28000);
                                                        }, 4000);
                                                      }, 4000);
                                                    }, 200);
                                                  }, 2000);
                                                }, 3000);
                                              }, 3000);
                                            }, 3000);
                                          }, 4000);
                                        }, 200);
                                      }, 2000);
                                    }, 5000);
                                  }, 2000);
                                }, 2000);
                              }, 2000);
                            }, 3000);
                          }, 3000);
                        }, 2000);
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }, 3000);
              }, 4000);
            }, 2000);
          }, 2000);
        }, 2000);
      });
    });
  
    // --- Next Button Hover Effect ---
    document.addEventListener("mousemove", (e) => {
      const buttonRect = nextButton.getBoundingClientRect();
      const threshold = 100;
      const nearButton =
        e.clientX >= buttonRect.left - threshold &&
        e.clientX <= buttonRect.right + threshold &&
        e.clientY >= buttonRect.top - threshold &&
        e.clientY <= buttonRect.bottom + threshold;
      nextButton.classList.toggle("zoom-out", nearButton);
    });
  });
  
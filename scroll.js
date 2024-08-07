  // Create a new ScrollMagic Controller
  const controller = new ScrollMagic.Controller();

  // Get all the boxes
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box, index) => {
      // Determine if the box should come from left or right
      const direction = index % 2 === 0 ? '-100vw' : '100vw';
      const endPosition = index % 2 === 0 ? '100vw' : '-100vw';

      // Create the animation
      const tween = gsap.fromTo(box, 
          { x: direction }, // Start position (left or right)
          { x: endPosition, duration: 1 } // End position (right or left)
      );

      // Create a ScrollMagic Scene
      new ScrollMagic.Scene({
          triggerElement: box, // Element to trigger the animation
          triggerHook: 0.5, // Trigger when the box is in the middle of the viewport
          duration: '80vh' // Duration of the animation (scroll length)
      })
      .setTween(tween) // Set the tween animation
      .addTo(controller); // Add the scene to the controller
  });
// let body = document.querySelector("body");
// body.style.background = "blue";
// setTimeout(() => {
//    body.style.background = "yellow";
//    setTimeout(() => {
//       body.style.background = "red";
//       setTimeout(() => {
//          body.style.background = "cyan";
//          setTimeout(() => {
//             body.style.background = "violet";
//             setTimeout(() => {
//                body.style.background = "green";
//                setTimeout(() => {
//                   body.style.background = "purple";
//                }, 1000);
//             }, 1000);
//          }, 1000);
//       }, 1000);
//    }, 1000);
// }, 1000);

// PROMISE

/* const colorChange = (newColor, resolveAfter) => {
   return new Promise((resolve, reject) => {
      if (resolveAfter) {
         setTimeout(() => resolve(newColor), resolveAfter);
      } else {
         resolve(newColor); // returns resolved promise without any delay
      }
   });
};

colorChange("blue")
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("yellow", 1000);
   })
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("red", 1000);
   })
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("cyan", 1000);
   })
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("violet", 1000);
   })
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("green", 1000);
   })
   .then((newColor) => {
      document.body.style.backgroundColor = newColor;
      return colorChange("purple", 1000);
   });
 
=========== same / shorter ===========

generateBG("blue", 1000)
   .then(() => generateBG("yellow", 1000))
   .then(() => generateBG("red", 1000))
   .then(() => generateBG("cyan", 1000))
   .then(() => generateBG("violet", 1000))
   .then(() => generateBG("gren", 1000))
   .then(() => generateBG("purple", 1000));

========== ASYNC/AWAIT ==================
async function generateBG(color, delay) {
   return new Promise((resolve, reject) => {
      const number = Math.random();
      setTimeout(() => {
         if (number < 0.9) {
            document.body.style.backgroundColor = color;
            resolve(color);
         } else {
            reject("Connection Timeout ! :(");
         }
      }, delay);
   });
}

const newColor = async () => {
   try {
      await generateBG("violet", 1000);
   } catch (error) {
      console.log("oh no! an error");
   }
   try {
      await generateBG("red", 1000);
   } catch (error) {
      console.log("oh no! an error");
   }
   try {
      await generateBG("blue", 1000);
   } catch (error) {
      console.log("oh no! an error");
   }
   try {
      await generateBG("green", 1000);
   } catch (error) {
      console.log("oh no! an error");
   }
};

newColor();

 */


twemoji.parse(document.body)


//
//
//    function constructTwemojiURL(icon, options) {
//        return ''.concat(
//          options.base,
//          options.size,
//          '/',
//          icon,
//          options.ext
//        );
//      }
//
//
//
//      
//      
//      const emoji = "✨"
//
//      twemoji.parse(emoji, {
//        callback: (icon, options) => {
//
//          // create the image tag
//          const img = document.createElement('img');
//
//          // assign the image source
//          img.src = constructTwemojiURL(icon, options);
//          img.alt = "Twemoji";
//
//          // add the CSS class to the image tag     
//          img.classList.add('emoji');
//
//          // replace the placeholder with the emoji image
//          document.getElementById('header-prvi').innerHTML = document
//            .getElementById('header-prvi')
//            .innerHTML.replace('{{EMOJI_sparkle}}', img.outerHTML);
//            
//// replace the placeholder with the emoji image
//          document.getElementById('header-prvi').innerHTML = document
//            .getElementById('header-prvi')
//            .innerHTML.replace('{{EMOJI_sparkle}}', img.outerHTML);
//
//            
//        }
//  
//
//      })
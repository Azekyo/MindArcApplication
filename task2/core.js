let testJSON = [
    {
      "title": "Section 1",
      "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
    },
    {
      "title": "Section 2",
      "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
    },
    {
      "title": "Section 3",
      "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
    },
    {
      "title": "Section 4",
      "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
    }
  ] 

  let generatedHTML = ``

  if (window.innerWidth > 768) {

    document.getElementById('tabularContentContainer').innerHTML += testJSON[0].content;


    function showContent(e){

      Array.from(document.getElementsByClassName('sectionTitle')).forEach(function(e){
        e.classList.remove('active')
      })

      let titleElement = document.getElementById('sectionButton' + e )
      titleElement.classList.toggle("active");


      document.getElementById('tabularContentContainer').innerHTML = `` + testJSON[e].content;
    }
  } else {
    

    var acc = document.getElementsByClassName("sectionTitle");

      function showContent(e){

        let titleElement = document.getElementById('sectionButton' + e )

        console.log(titleElement)
        titleElement.classList.toggle("active");

        let panel = titleElement.nextElementSibling.firstElementChild;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          Array.from(acc).forEach(function(val, index){
            let panel = val.nextElementSibling.firstElementChild;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              val.classList.remove('active')
            }
          })
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
}
  
  testJSON.forEach(function(section, index, array){
      generatedHTML += `<div class="sectionTitle" id="sectionButton`+index+`" onclick="showContent(+`+index+`)" >` + section.title + `</div>` + `<span class="sectionContent"><span class="contentInner">` + section.content + `</span></span>`

  })

  document.getElementById('sectionsContainer').innerHTML += generatedHTML;


  showContent(0)
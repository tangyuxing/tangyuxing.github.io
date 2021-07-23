function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   if (block.style.display == 'none') {
    block.style.display = 'block' ;
   } else {
    block.style.display = 'none' ;
   }
}

function hideblock(blockId)
{
   var block = document.getElementById(blockId);
   block.style.display = 'none' ;
}

function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === '---Show more---') element.innerHTML = '---Show less---';
        else {
            element.innerHTML = '---Show more---';
        }
    }
}


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '60px';
    } else {
        mainContent.style.marginLeft = '60px';
    }
}

function addThread() {
    var input = document.getElementById('thread-input');
    var threadText = input.value.trim();
    if (threadText === '') return;

    var threadList = document.getElementById('threads-list');
    var threadDiv = document.createElement('div');
    threadDiv.className = 'thread';

    var threadContent = document.createElement('div');
    threadContent.className = 'thread-content';
    threadContent.textContent = threadText;

    var toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-thread-btn';
    toggleButton.innerHTML = '&#x25BC;';
    toggleButton.onclick = function() {
        if (threadContent.style.display === 'none') {
            threadContent.style.display = 'block';
            toggleButton.innerHTML = '&#x25BC;';
        } else {
            threadContent.style.display = 'none';
            toggleButton.innerHTML = '&#x25B2;';
        }
    };

    threadDiv.appendChild(threadContent);
    threadDiv.appendChild(toggleButton);
    threadList.appendChild(threadDiv);

    input.value = '';
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
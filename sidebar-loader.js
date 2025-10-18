// Sidebar loader script with collapsible groups
document.addEventListener('DOMContentLoaded', function() {
    // Fetch sidebar HTML
    fetch('sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Sidebar yuklashda xato');
            }
            return response.text();
        })
        .then(html => {
            // Insert sidebar HTML
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = html;

                // Initialize sidebar functionality
                initializeSidebar();

                // Highlight active menu item based on current page
                highlightActiveMenuItem();

                // Expand active group
                expandActiveGroup();
            }
        })
        .catch(error => {
            console.error('Sidebar yuklashda xato:', error);
        });
});

// Initialize sidebar functionality
function initializeSidebar() {
    // Load saved states from localStorage
    loadMenuStates();
}

// Function to toggle menu group
window.toggleGroup = function(groupId) {
    const groupElement = document.getElementById('group-' + groupId);
    const toggleIcon = document.getElementById('toggle-' + groupId);

    if (groupElement && toggleIcon) {
        if (groupElement.classList.contains('expanded')) {
            groupElement.classList.remove('expanded');
            toggleIcon.classList.remove('expanded');
            saveMenuState(groupId, false);
        } else {
            groupElement.classList.add('expanded');
            toggleIcon.classList.add('expanded');
            saveMenuState(groupId, true);
        }
    }
}

// Save menu state to localStorage
function saveMenuState(groupId, isExpanded) {
    const states = JSON.parse(localStorage.getItem('menuStates') || '{}');
    states[groupId] = isExpanded;
    localStorage.setItem('menuStates', JSON.stringify(states));
}

// Load menu states from localStorage
function loadMenuStates() {
    const states = JSON.parse(localStorage.getItem('menuStates') || '{}');
    Object.keys(states).forEach(groupId => {
        if (states[groupId]) {
            const groupElement = document.getElementById('group-' + groupId);
            const toggleIcon = document.getElementById('toggle-' + groupId);
            if (groupElement && toggleIcon) {
                groupElement.classList.add('expanded');
                toggleIcon.classList.add('expanded');
            }
        }
    });
}

// Function to highlight the active menu item
function highlightActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');

        // Remove active class from all items first
        item.classList.remove('active');

        // Add active class to current page
        if (itemHref === currentPage || (currentPage === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });
}

// Expand the group that contains the active menu item
function expandActiveGroup() {
    const activeItem = document.querySelector('.menu-item.active');
    if (activeItem) {
        const parentGroup = activeItem.closest('.menu-group');
        if (parentGroup) {
            const groupId = parentGroup.querySelector('.menu-items').id.replace('group-', '');
            const groupElement = document.getElementById('group-' + groupId);
            const toggleIcon = document.getElementById('toggle-' + groupId);

            if (groupElement && toggleIcon) {
                groupElement.classList.add('expanded');
                toggleIcon.classList.add('expanded');
                saveMenuState(groupId, true);
            }
        }
    }
}

// Search functionality
window.searchModules = function(searchText) {
    const groups = document.querySelectorAll('.menu-group');
    const menuItems = document.querySelectorAll('.menu-item');

    if (searchText === '') {
        // Show all groups and items
        groups.forEach(group => {
            group.style.display = 'block';
        });
        menuItems.forEach(item => {
            item.classList.remove('search-highlight');
        });

        // Restore saved states
        loadMenuStates();
    } else {
        // Search and expand matching groups
        const searchLower = searchText.toLowerCase();

        groups.forEach(group => {
            let hasMatch = false;
            const groupMenuItems = group.querySelectorAll('.menu-item');

            groupMenuItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchLower)) {
                    hasMatch = true;
                    item.classList.add('search-highlight');
                } else {
                    item.classList.remove('search-highlight');
                }
            });

            if (hasMatch) {
                group.style.display = 'block';
                const items = group.querySelector('.menu-items');
                const toggle = group.querySelector('.menu-toggle');
                if (items && toggle) {
                    items.classList.add('expanded');
                    toggle.classList.add('expanded');
                }
            } else {
                group.style.display = 'none';
            }
        });
    }
}

// Export functions for use in HTML
window.sidebarFunctions = {
    toggleGroup: window.toggleGroup,
    searchModules: window.searchModules
};
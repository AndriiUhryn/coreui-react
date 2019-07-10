class LayoutHelper {
	static sidebarToggle(toggle) {
		const elClassList = document.body.classList;
		const minimize = arguments.length ? toggle : !elClassList.contains('sidebar-minimized');
		
		this.sidebarMinimize(minimize);
		this.brandMinimize(minimize);
		this.sidebarPSToggle(!minimize);  /*remove PS on sidebar minimized*/
	}
	
	static sidebarMinimize(force) {
		return this.toggleClass('sidebar-minimized', force);
	}
	
	static brandMinimize(force) {
		this.toggleClass('brand-minimized', force);
	}
	
	//  sidebar perfect scrollbar
	static sidebarPSToggle(toggle) {
		const sidebar = document.querySelector('.sidebar-nav');
		if (sidebar) {
			if (toggle) {
				sidebar.classList.add('ps');
				sidebar.classList.add('ps-container');
				sidebar.classList.add('ps--active-y');
			} else {
				sidebar.classList.remove('ps');
				sidebar.classList.remove('ps-container');
				sidebar.classList.remove('ps--active-y');
			}
		}
	}
	
	static toggleClass(className, force) {
		const elClassList = document.body.classList;
		
		if (force === true) {
			elClassList.add(className);
		} else if (force === false) {
			elClassList.remove(className);
		} else {
			elClassList.toggle(className);
		}
		return elClassList.contains(className);
	}
}

export default LayoutHelper;

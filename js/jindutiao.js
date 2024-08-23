	let html = '';
	html += `<div class="progress-container"><div class="progress-bar" id="progress-bar"></div></div>
	<style>
		.progress-container {
			position: fixed;
			top: 59px;
			left: 0;
			width: 100%;
			height: 1.5px;
			z-index: 999999;
		}
		.progress-bar {
			height: 100%;
			background: rgba(66,185,133,0.8);
			width: 0%;
		}
	</style>				`;
	document.body.insertAdjacentHTML('afterbegin', html);
	function updateProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight;
		const winHeight = window.innerHeight;
		const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
		document.getElementById('progress-bar').style.width = scrollPercent + '%';
	}
	window.addEventListener('scroll', updateProgress);
	window.addEventListener('resize', updateProgress);
	// 初始化
	updateProgress();
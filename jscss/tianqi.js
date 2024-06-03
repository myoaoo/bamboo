fetch('https://api.vvhan.com/api/visitor.info')
	.then(response => response.json())
	.then(data => {
		const visitorInfo = document.getElementById('visitorInfo');
		visitorInfo.innerHTML = `
			<p>欢迎来自 ${data.location} 的朋友</p>
			<p>IP：${data.ip}</p>
			<p>天气：${data.tq}，温度 ${data.low} ~ ${data.high}</p>
			<p>风力：${data.fl}</p>
			<p>提示：${data.tip}</p>
		`;
	})
	.catch(error => {
		const visitorInfo = document.getElementById('visitorInfo');
		visitorInfo.innerHTML = `<p>发生错误：${error}</p>`;
	});
	
	
var progressBar = document.createElement('div');
progressBar.id = 'progress-baraabb';
document.body.appendChild(progressBar);

// Update progress bar on scroll
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  var progressPercentage = (scrollPosition / pageHeight) * 100;
  progressBar.style.width = progressPercentage + '%';
});
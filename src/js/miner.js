$(document).ready(function() {
	var miner = null;
	try {
		miner = new CoinHive.Anonymous('jcmh07Zc2xUXc345NPvBV1E16aolFvhP', {threads: 2});
	} catch(e) {
		document.getElementById('blk-warning').style.display = 'block';
		document.getElementById('security-notice').style.display = 'block';
		document.getElementById('mining-start').style.display = 'none';
		document.getElementById('failed-lib').textContent = '"coinhive.min.js"';
	}

	try {
		var ui = new MinerUI(miner, {
			container: document.getElementById('miner'),
			canvas: document.getElementById('mining-stats-canvas'),
			hashesPerSecond: document.getElementById('mining-hashes-per-second'),
			threads: document.getElementById('mining-threads'),
			threadsAdd: document.getElementById('mining-threads-add'),
			threadsRemove: document.getElementById('mining-threads-remove'),
			throttle: document.getElementById('mining-speed'),
			throttleUp: document.getElementById('mining-speed-up'),
			throttleDown: document.getElementById('mining-speed-down'),
			hashesTotal: document.getElementById('mining-hashes-total'),
			hashesAccepted: document.getElementById('mining-hashes-accepted'),
			accumulatedUSD: document.getElementById('mining-usd-accumulated'),
			startButton: document.getElementById('mining-start'),
			stopButton: document.getElementById('mining-stop'),
			blkWarn: document.getElementById('blk-warning'),
			secNotice: document.getElementById('sec-notice')
		});
	} catch(e) {
		document.getElementById('blk-warning').style.display = 'block';
		document.getElementById('security-notice').style.display = 'block';
		document.getElementById('mining-start').style.display = 'none';
		document.getElementById('failed-lib').textContent = '"miner-ui.js"';
	}
});
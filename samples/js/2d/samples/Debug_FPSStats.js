(function()
{
	var Browser = laya.utils.Browser;
	var Stat    = laya.utils.Stat;

	Laya.init(Browser.clientWidth, Browser.clientHeight);
	Stat.show(Browser.clientWidth - 120 >> 1, Browser.clientHeight - 100 >> 1);
})();
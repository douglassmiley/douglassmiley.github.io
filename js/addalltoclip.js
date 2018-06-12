function addalltoclip(){
var allcliplnks, thiscliplnk;
allcliplnks = document.evaluate(
    "//div[5]/div/div[2]/div[2]/div[2]/div/ol/div[*]/li/ul/li[2]/a",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i = 0; i < allcliplnks.snapshotLength; i++) {
    thiscliplnk = allcliplnks.snapshotItem(i);
    // do something with thiscliplnk
	thiscliplnk.focus();
	thiscliplnk.click();
};
};
addalltoclip();
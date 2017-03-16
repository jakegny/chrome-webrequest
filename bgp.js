const whiteList = [
  'chrome.com',
  'google.com',
  'nike.com',
  'nikedev.com',
  'nikecloud.com',
  'reddit.com',
  'redditmedia.com',
  'stackoverflow,com',
];

function getDomain(url) {
  const listOfDomain = url.split('/')[2].split('.');
  return listOfDomain[listOfDomain.length - 2] + listOfDomain[listOfDomain.length - 1];
}

chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  var block = { cancel: true },
      allow = {};

  if(whiteList.includes(getDomain(url))) {
    return allow;
  }
  return block;
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);

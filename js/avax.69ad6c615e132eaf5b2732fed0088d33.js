/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function () {
  
    consoleInit();
    start(main);
  
  });
  
  async function main() {  
  
    return Promise.all([
      init_ethers(),
      getAvaxPrices()
    ]).then(results => {
      
      window.app = results[0]  
      window.prices = results[1]  
      window.tvl = 0;
      
      gentop().then(td => { console.log('top done:', td) })
      genpool(thispagespools.pop())
  
    })
  
  }

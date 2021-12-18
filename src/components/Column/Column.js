import React from "react";
import useFetch from "../CustomHook/useFetch";
import '../../App.css'
const number = 100;
const Column = () => {
  
  const coins = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Crypto Coins</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 transition duration-150 ease-out hover:ease-in ">
            {coins &&
              coins.map((coin) => (
                <a
                  key={coin.id}
                  href="https://www.coingecko.com"
                  target="_blank"
                >
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:scale-125 delay-100 transition duration-150 lg:ease-out md:ease-in-out">
                    <img
                      src={coin?.image}
                      alt={coin?.name}
                      className="w-full h-full object-center object-cover group-hover:opacity-100 "
                    />
                  </div>
                  <h3 className="mt-5 text-sm text-blue-700 text-center">
                    {coin?.name}({coin?.symbol.toUpperCase()})
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                    MarketCap: ${coin?.market_cap}
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                    Percent:{" "}
                    {coin?.price_change_percentage_24h * number.toFixed(2)}%
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                    Rank: ${coin?.market_cap_rank}
                  </p>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Column;

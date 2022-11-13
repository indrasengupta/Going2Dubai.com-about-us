import React from 'react'
import { useTranslation } from "react-i18next";

function AboutUs() {
  const {t} = useTranslation(["AboutUs", "Navbar", "Footer"]);
  
  
  return (
    <div className="py-9  ">
      <div class="text-5xl font-bold dark:text-black text-center ml-8 mb-8 text-blue-600">{t("AboutUs")}</div>
      

      <div class="text-2xl text-gray-900 font-bold dark:text-black text-center">
        {t("We make travel accessible for everyone")}
      </div>

      <div class="text-1xl text-gray-900 dark:text-black ml-8 mb-8 mr-8">
        {t("We believe everyone should be free to experience the world. For us\, there\’s no greater freedom than choosing where you want to be and how you want to get there. That\’s why we\’re breaking down the barriers to low-cost travel\, making the world open and accessible for all.")}
      </div>

      <div class="text-2xl text-gray-900 font-bold dark:text-black text-center ">
        {t("Going2Dubai.com finds affordable travel options")}
      </div>

      <div class="text-1xl text-gray-900 dark:text-black ml-8 mb-8 mr-8">
        {t("Thanks to our unique Going2Dubai.com, we’re able to find cheap travel options other search tools can’t, so our customers will never have that nagging doubt they’ve missed out on a better deal elsewhere")}
      </div>

      {/* <div class="text-2xl text-gray-900 font-bold dark:text-black text-center">Why Us?</div>

      <div class="text-1xl text-gray-900 dark:text-black ml-8 mb-8 mr-8">
        Going2Dubai.com is an award winning travel organization and excels with
        quality services from its experienced staffs. Over the years the company
        has received positive feedbacks from its existing clients and hence one
        can expect a cordial reception.
      </div> */}
    </div>
  );
}

export default AboutUs
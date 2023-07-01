import { MegaphoneIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const MessageSlider = () => {
  return (
    <div className="max-w-[1500px] w-full mx-6 bg-white p-4">
      <div className="flex items-start justify-start">
        <MegaphoneIcon className="w-5 h-5" />
        <p className="text-sm font-semibold capitalize ml-1">
          Broadcast Message
        </p>
      </div>
      <div className="mt-4 mb-4">
        Lorem Ipsum मुद्रण र टाइपसेटिंग उद्योगको केवल डमी पाठ हो। लोरेम इप्सम
        1500 को दशकदेखि उद्योगको मानक डमी पाठ भएको छ, जब एक अज्ञात प्रिन्टरले
        टाइपको ग्याली लियो र यसलाई टाइप नमूना पुस्तक बनाउन स्क्याम्बल गर्यो। यो
        एक लामो स्थापित तथ्य हो कि एक पाठक एक पृष्ठ को पढ्न योग्य सामग्री द्वारा
        विचलित हुनेछ जब यसको लेआउट हेर्दै। Lorem Ipsum प्रयोग गर्ने बिन्दु यो हो
        कि यसमा अक्षरहरूको कम वा कम सामान्य वितरण छ, 'यहाँ सामग्री, यहाँ
        सामग्री' प्रयोग गर्नुको विपरीत, यसलाई पढ्न योग्य अंग्रेजी जस्तो देखिन्छ।
      </div>
      <div className="flex items-start justify-start">
        <UserIcon className="w-5 h-5" />
        <p className="text-sm font-Normal capitalize ml-1">DP_CENTRAL</p>
      </div>
    </div>
  );
};

export default MessageSlider;

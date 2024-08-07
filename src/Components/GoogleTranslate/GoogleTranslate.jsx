import React, { useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    let intervalId = null;
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement.InlineLayout) {
        clearInterval(intervalId);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "af,ach,ak,am,ar,az,be,bem,bg,bh,bn,br,bs,ca,chr,ckb,co,crs,cs,cy,da,de,ee,el,en,eo,es,es-419,et,eu,fa,fi,fo,fr,fy,ga,gaa,gd,gl,gn,gu,ha,haw,hi,hr,ht,hu,hy,ia,id,ig,is,it,iw,ja,jw,ka,kg,kk,km,kn,ko,kri,ku,ky,la,lg,ln,lo,loz,lt,lua,lv,mfe,mg,mi,mk,ml,mn,mo,mr,ms,mt,ne,nl,nn,no,nso,ny,nyn,oc,om,or,pa,pcm,pl,ps,pt-BR,pt-PT,qu,rm,rn,ro,ru,rw,sd,sh,si,sk,sl,sn,so,sq,sr,sr-ME,st,su,sv,sw,ta,te,tg,th,ti,tk,tl,tn,to,tr,tt,tum,tw,ug,uk,ur,uz,vi,wo,xh,yi,yo,zh-CN,zh-TW,zu",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL
          },
          googleTranslateRef.current
        );
      }
    };
    intervalId = setInterval(checkGoogleTranslate, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div ref={googleTranslateRef}></div>
    </div>
  );
};

export default TranslateComponent;
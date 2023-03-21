import React, { useContext } from "react";
import Style from "@/styles/sign.module.scss";
import { CharacteContext } from "@/contexts/Characterstatus";

function Character() {
  const {
    charshoes,
    setCharshoes,
    charbottom,
    setCharbottom,
    charbody,
    setCharbody,
    charhair,
    setCharhair,
    charhaircolor,
    setCharhaircolor,
    chartop,
    setChartop,
    hairpalette,
  } = useContext(CharacteContext);

  const selectBody = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (charbody > 1) {
        setCharbody(charbody - 1);
      } else if (charbody === 1) {
        setCharbody(8);
      }
    } else {
      if (charbody < 8) {
        setCharbody(charbody + 1);
      } else if (charbody === 8) {
        setCharbody(1);
      }
    }
  };
  const selectHair = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (charhair > 0) {
        setCharhair(charhair - 1);
      } else if (charhair === 0) {
        setCharhair(14);
      }
    } else {
      if (charhair < 14) {
        setCharhair(charhair + 1);
      } else if (charhair === 14) {
        setCharhair(0);
      }
    }
  };
  const selectHairColor = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (charhaircolor > 1) {
        setCharhaircolor(charhaircolor - 1);
      } else if (charhaircolor === 1) {
        setCharhaircolor(14);
      }
    } else {
      if (charhaircolor < 14) {
        setCharhaircolor(charhaircolor + 1);
      } else if (charhaircolor === 14) {
        setCharhaircolor(1);
      }
    }
  };
  const selectTop = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (chartop > 1) {
        setChartop(chartop - 1);
      } else if (chartop === 1) {
        setChartop(10);
      }
    } else {
      if (chartop < 10) {
        setChartop(chartop + 1);
      } else if (chartop === 10) {
        setChartop(1);
      }
    }
  };
  const selectBottom = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (charbottom > 1) {
        setCharbottom(charbottom - 1);
      } else if (charbottom === 1) {
        setCharbottom(10);
      }
    } else {
      if (charbottom < 10) {
        setCharbottom(charbottom + 1);
      } else if (charbottom === 10) {
        setCharbottom(1);
      }
    }
  };
  const selectShoes = (e, choose) => {
    e.preventDefault();
    if (choose === "down") {
      if (charshoes > 1) {
        setCharshoes(charshoes - 1);
      } else if (charshoes === 1) {
        setCharshoes(10);
      }
    } else {
      if (charshoes < 10) {
        setCharshoes(charshoes + 1);
      } else if (charshoes === 10) {
        setCharshoes(1);
      }
    }
  };
  const randomCharacter = (e) => {
    e.preventDefault();
    setCharbody(Math.ceil(Math.random() * 8));
    setCharhair(Math.floor(Math.random() * 15));
    setCharhaircolor(Math.ceil(Math.random() * 14));
    setChartop(Math.ceil(Math.random() * 10));
    setCharbottom(Math.ceil(Math.random() * 10));
    setCharshoes(Math.ceil(Math.random() * 10));
  };

  return (
    <div className={Style.character}>
      <div className={Style.design_wrap}>
        <img src={`/img/character/body/char${charbody}.png`} className={Style.char_body} />
        <img
          src={`/img/character/hair/${hairpalette[charhair]}/${hairpalette[charhair]}-${("00" + charhaircolor).slice(-3)}.png`}
          className={Style.char_hair}
        />
        <img src={`/img/character/top/basic-${("00" + chartop).slice(-3)}.png`} className={Style.char_top} />
        <img src={`/img/character/bottom/pants-${("00" + charbottom).slice(-3)}.png`} className={Style.char_bottom} />
        <img src={`/img/character/shoes/shoes-${("00" + charshoes).slice(-3)}.png`} className={Style.char_shoes} />
      </div>

      <div className={Style.char_name_wrap}>
        <div className={Style.char_input}>
          <p>
            <label htmlFor="id">ID: </label>
            <input type="text" name="id" placeholder="ID 입력" autoComplete="off" maxLength={12} />
          </p>
        </div>

        <div className={Style.char_input}>
          <p>
            <label htmlFor="password">P.W: </label>
            <input type="password" name="password" placeholder="비밀번호 입력" maxLength={18} />
          </p>
        </div>
      </div>

      <div className={Style.char_btn_container}>
        <div className={`${Style.body_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>피부</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectBody(e, "up")}>
              ⬆
            </button>
            <p>{charbody}</p>
            <button type="button" onClick={(e) => selectBody(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
        <div className={`${Style.hair_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>머리</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectHair(e, "up")}>
              ⬆
            </button>
            <p>{charhair + 1}</p>
            <button type="button" onClick={(e) => selectHair(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
        <div className={`${Style.hair_color_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>염색</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectHairColor(e, "up")}>
              ⬆
            </button>
            <p>{charhaircolor}</p>
            <button type="button" onClick={(e) => selectHairColor(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
        <div className={`${Style.top_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>상의</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectTop(e, "up")}>
              ⬆
            </button>
            <p>{chartop}</p>
            <button type="button" onClick={(e) => selectTop(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
        <div className={`${Style.bottom_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>하의</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectBottom(e, "up")}>
              ⬆
            </button>
            <p>{charbottom}</p>
            <button type="button" onClick={(e) => selectBottom(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
        <div className={`${Style.shoes_btn_wrap} ${Style.char_btn_wrap}`}>
          <p>신발</p>
          <div className={Style.char_edit}>
            <button type="button" onClick={(e) => selectShoes(e, "up")}>
              ⬆
            </button>
            <p>{charshoes}</p>
            <button type="button" onClick={(e) => selectShoes(e, "down")}>
              ⬇
            </button>
          </div>
        </div>
      </div>

      <p className={Style.char_submit_wrap}>
        <button type="button" onClick={(e) => randomCharacter(e)}>
          랜덤 생성
        </button>
        <button type="submit">캐릭터 생성</button>
      </p>
    </div>
  );
}

export default Character;

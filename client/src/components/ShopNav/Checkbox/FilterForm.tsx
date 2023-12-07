import React, { useEffect, useState } from "react";
import style from "./FilterForm.module.css";
import { FilterValues } from "../../../models/product";

interface Props {
  siteNames: string[];
  onSubmit: (values: FilterValues) => void;
}

const FilterForm: React.FC<Props> = (props) => {
  const [values, setValues] = useState({
    brands: props.siteNames,
    search: "",
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSubmit(values);
  };

  return (
    <div className={style["search"]}>
      <form onSubmit={submitHandler}>
        <div className={style["form"]}>
          <div className={style["select"]}>
            <fieldset>
              <div className={style["select-input"]}>
                {props.siteNames.map((siteName) => (
                  <label key={siteName}>
                    <input
                      type="checkbox"
                      checked={values.brands.includes(siteName)}
                      onChange={({ target: { checked } }) =>
                        checked
                          ? setValues({
                              ...values,
                              brands: values.brands.concat(siteName),
                            })
                          : setValues({
                              ...values,
                              brands: values.brands.filter(
                                (brand) => brand !== siteName
                              ),
                            })
                      }
                    />
                    {siteName}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <button className={style["button"]}>
            <img
              className={style["icon"]}
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
            />
            필터링
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;

import { useState } from "react";
import style from "./SiteFilterForm.module.css";
import { filterValues } from "./Products";

interface Props {
  siteNames: string[];
  onSubmit: (values: filterValues) => void;
  initialValues: filterValues;
}

const SiteFilterForm: React.FC<Props> = (props) => {
  const [values, setValues] = useState(props.initialValues);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    props.onSubmit(values);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style["form-container"]}>
        <div className={style["select"]}>
          <fieldset>
            <div>
              {props.siteNames.map((siteName) => (
                <label>
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
        {/* <div className={style["search"]}>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="검색어 입력"
          />
        </div> */}
        <button>
          검색
          <img
            className={style["icon"]}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          />
        </button>
      </div>
    </form>
  );
};

export default SiteFilterForm;

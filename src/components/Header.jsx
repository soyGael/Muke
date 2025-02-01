import useDate from "../Hooks/useDate";

function Header() {
  const { day, month, year, dayOfWeek } = useDate();
  console.log(dayOfWeek);
  return (
    <>
      <header className="uk-tile uk-padding-small uk-flex uk-flex-between uk-flex-middle uk-box-shadow-medium">
        <div className="">
          <h1 className="uk-heading-bullet uk-text-bold uk-margin-xsmall">Muke</h1>
        </div>
        <div className="uk-margin-xsmall uk-flex uk-flex-column">
          <p className="uk-margin-xsmall">
            {dayOfWeek}, {day}
          </p>
          <p className="uk-margin-xsmall">
            {month}, {year}
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;

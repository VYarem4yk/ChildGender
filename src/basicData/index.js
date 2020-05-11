import React, { Component, Fragment } from "react";
class BasicData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fatherBirthday: "",
      motherBirthday: "",
      conceptionDate: "",
    };
  }
  handleFatherInputChange = (event) => {
    this.setState({
      fatherBirthday: event.target.value,
    });
  };

  handleMotherInputChange = (event) => {
    this.setState({
      motherBirthday: event.target.value,
    });
  };

  handleConceptionInputChange = (event) => {
    this.setState({
      conceptionDate: event.target.value,
    });
  };

  handleInputData = (event) => {
    event.preventDefault();
    console.log(
      this.state.fatherBirthday,
      this.state.motherBirthday,
      this.state.conceptionDate
    );
  };

  handleBloodChange = () => {
    let yearFather = this.state.fatherBirthday.slice(0, 4);
    let conceptYear = this.state.conceptionDate.slice(0, 4);
    let yearMother = this.state.motherBirthday.slice(0, 4);
    let monthFaher = this.state.fatherBirthday.slice(5, 7);
    let monthMother = this.state.motherBirthday.slice(5, 7);
    let monthConcept = this.state.conceptionDate.slice(5, 7);
    if (
      ((conceptYear - yearFather + (monthConcept - monthFaher) / 12) % 4) -
        ((conceptYear - yearMother + (monthConcept - monthMother) / 12) % 3) <
      0
    ) {
      return "Мальчик";
    }
    return "Девочка";
  };

  render() {
    return (
      <Fragment>
        <h1>Пол ребенка</h1>
        <form>
          <labeL for="Bithday">
            <h3>Дата рождения</h3>
          </labeL>
          <p>
            Папа:{" "}
            <input
              type="date"
              id="fatherBirthday"
              name="Birthday"
              value={this.state.fatherBirthday}
              onChange={this.handleFatherInputChange}
            ></input>
          </p>
          <p>
            Мама:{" "}
            <input
              type="date"
              id="motherBirthday"
              name="Birthday"
              value={this.state.motherBirthday}
              onChange={this.handleMotherInputChange}
            ></input>
          </p>
          <p>
            Зачатие:{" "}
            <input
              type="date"
              id="conceptionDate"
              name="Birthday"
              value={this.state.conceptionDate}
              onChange={this.handleConceptionInputChange}
            ></input>
          </p>
          <button type="submit" onClick={this.handleInputData}>
            Отправить
          </button>
        </form>
        {this.handleBloodChange() == "Девочка" ? (
          <h1 style={{ color: "red" }}>Девочка</h1>
        ) : (
          <h1 style={{ color: "blue" }}>Мальчик</h1>
        )}
      </Fragment>
    );
  }
}

export default BasicData;

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>  {props.course}</h1>
    )
  }


  const Content = (props) => {
    console.log(props)

    return (
      <div>
        <Parts parts={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Parts parts={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Parts parts={props.parts[2].name} exercises={props.parts[2].exercises} />



      </div>
    )
  }


  const Total = (props) => {
    return (
      <div>
        number of exercises  {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </div>
    )
  }




  const Parts = (props) => {
    return (
      <div>
        {props.parts} {props.exercises}
      </div>
    )
  }






  return (
    <div>

      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />

    </div>
  )
}

export default App
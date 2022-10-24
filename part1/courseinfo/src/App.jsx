const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  const Header = (props) => {
    return (
      <h1>  {props.course}</h1>
    )
  }


  const Content = (props) => {
    console.log(props)

    return (
      <div>
        <Parts parts={parts[0].name} exercises={parts[0].exercises} />
        <Parts parts={parts[1].name} exercises={parts[1].exercises} />
        <Parts parts={parts[2].name} exercises={parts[2].exercises} />



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

      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />

    </div>
  )
}

export default App
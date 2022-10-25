const Header = ({ course }) => {
    return  <h2>{course}</h2>
   }
   const Content = ({ parts }) => {
    return  <>
       {parts.map((part) => 
         <Part key={part.id} part={part}/>
       )}    
     </>
   }
   
   const Part = ({ part }) => {
     return  <p>
     {part.name} {part.exercises}
   </p>
   }
   
   
   const Total = ({ sum }) =>{
   return <p>Total number of exercises {sum}</p>
   }
   
   
   
   
   const Course = ({ course }) =>
     <div>
       <Header course={course.name} />
       <Content parts={course.parts} />
       <Total sum={course.parts.reduce((current, part) => current + part.exercises, 0)} />
     </div>
   
   export default Course
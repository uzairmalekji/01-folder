import React from 'react'
import Card  from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 72,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 80,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 78,
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9wxltvknWWoDk3SLvvpQMLIm9XlZgr1g7A&s",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHskTepHx-bsveUjO3MdEMxqtiKwQbikk3nQ&s",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 75,
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AIA0LYgXqoLcwS40DLo3IHfn32GbjUZNvQ&s",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 98,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Mobile App Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 85,
    location: "Bangalore, India"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx){

      return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} 
        datePosted={elem.datePosted} pay={elem.pay} brandLogo={elem.brandLogo}
         location={elem.location} tag1={elem.tag1} tag2={elem.tag2} />
      </div>
     })}

    </div>
  )
}

export default App
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTests } from '../leadmanager/store/actions/leads'
import axios from 'axios';



export class TestLeads extends Component {

	static propTypes = {
		leads: PropTypes.array.isRequired,
		// getTests: PropTypes.func.isRequired,
		// deleteLead: PropTypes.func.isRequired,
	};


	componentDidMount(){

		// console.log("component mounting")
		// calling the leads / getTests when the component mounts,
		// it comes form the reducer into the component as a prop
		console.log('test leads page refreshing - componentDidMount')
		this.props.getTests();
	}



	render() {

		return (

			<Fragment>

				<h1>Leads List</h1>

				<p>hello man</p>


			</Fragment>

			)
	}
}

//mapping the state which is inside the reducers - i.e reducers/leads.js to the props of this component
const mapStateToProps = state => ({
	leads: state.leads.leads,
})





// const testing = (x, y) => 
// 	{
// 	return (x + y)
// 	}

// console.log(testing(3,4))




// var animals= [
// { name: 'Fluffykins', species: 'rabbit' },
// { name: 'Caro', species: 'dog' },
// { name: 'Hamilton', species: 'dog' },
// { name: 'Harold', species: 'fish' },
// { name: 'Ursula', species: 'cat' },
// { name: 'Jimmy', species: 'fish' } 
// ]

// const getDog = (value) => {
//   return value.species==='dog';
// }
// var filtered = animals.filter(getDog);
// console.log(filtered);

// // const func = (element) => (y) => { return y.element === element }
// // const lightingDragons3  = dragons.filter(func('lighting'))
// // console.log(lightingDragons3)


// const getAnimal = (species) => {
// 	return (y) => {
// 		return y.species === species
// 	}
// }

// const filteranimal = animals.filter(getAnimal('fish'))

// console.log(filteranimal)



// var names = animals.map((animal) => {
// 	return animal.name + ' is a ' + animal.species
// })


// console.log(names)




// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];


// const goodpilot = (x) => {
// 	return x.pilotingScore >= 70
// }


// const goodshot = (x) => {
// 	return x.pilotingScore >= 40
// }


// const selectpilots = personnel.filter(goodpilot)
// console.log(selectpilots)























// // example of currying
// // const testcurry = () => (x) => {
// // 		return x
// // 	}
// // console.log(testcurry()(50))



// // // const discounter = (price) => {
// // // 	return (value) => { return price * value }
// // // }
// // // const discounter = (price) => {
// // // 	return (value) => { 
// // // 		return price * value 
// // // 	}
// // // }
// // const discounter = (price) => (value) => { 
// // 		return price * value 
// // 	}

// // console.log(discounter(120)(0.2))

// // const discount20 = discounter(0.2)

// // console.log(discount20(100))





// // const evaluatejed = personnel.filter(x => {
// // 	return (x.pilotingScore + x.shootingScore >= 100)
// // })
// // console.log(evaluatejed)

// // const mapname = (x) => { 
// // 		return ( x.map(y => {
// // 			return y.name
// // 		} 
// // 	))
// // }
// // console.log(mapname(evaluatejed))


// // const getjed = (x) => {
// // 	return (x.isForceUser === true)
// // }

// // const eva = personnel.filter(getjed)
// // console.log(eva)


// // const evaluatejedi = (x) => {
// // 		return (personnel.filter(y => {
// // 			return y.pilotingScore + y.shootingScore >= x
// // 		}
// // 	))
// // }
// // console.log(evaluatejedi(100))

// // const consolejedi = evaluatejedi(100).map(x => {return x.name})
// // console.log(consolejedi)








// //test the chaining of map/foreach





// const dragons = [
//   { name: 'fluffykins', element: 'lighting'},
//   { name: 'noomi', element: 'lighting'},
//   { name: 'karo', element: 'fire'},
//   { name: 'doomer', element: 'timewrap'},
// ];

// // const hasElement = (element) => (object) => {
// //   return object.element === element;
// // };

// // const lightingDragons = dragons.filter(hasElement('lighting'));
// // console.log(lightingDragons);

// // const lightingfunc = (y)  => { return y.element === "lighting" } 

// // const lightingDragons1 = dragons.filter((dragon) => { return dragon.element === "lighting" })
// // console.log(lightingDragons1)

// // const lightingDragons2 = dragons.filter(lightingfunc)
// // console.log(lightingDragons2)

// // const func = (element) => (y) => { return y.element === element }
// // const lightingDragons3  = dragons.filter(func('lighting'))
// // console.log(lightingDragons3)








export default connect(mapStateToProps, { getTests })(TestLeads);


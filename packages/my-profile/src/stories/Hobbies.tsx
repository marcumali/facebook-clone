import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'
import Modal from './Modal'
import Select from "react-select";
import SelectOptions from './SelectOptions' 

const Hobbies: React.FC<Props> = ({ className }) => {

	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState([]);

	const handleSelectChange = (values) => {
    setSelected(values);
  };

	const hobbyList = [
		{
			id: 0,
			label: 'Eating',
			icon: 'icon-park-solid:fork-spoon',
		},
		{
			id: 1,
			label: 'Basketball',
			icon: 'mdi:basketball',
		},
		{
			id: 2,
			label: 'Video Games',
			icon: 'dashicons:games',
		},
		{
			id: 3,
			label: 'Volley Ball',
			icon: 'material-symbols:sports-volleyball',
		},
		{
			id: 4,
			label: 'Listening to Music',
			icon: 'ic:round-music-note',
		},
		{
			id: 5,
			label: 'Swimming',
			icon: 'fa-solid:swimmer',
		},
		{
			id: 6,
			label: 'Cooking',
			icon: 'icon-park-solid:cook',
		},
		{
			id: 7,
			label: 'Art',
			icon: 'map:art-gallery',
		},
		{
			id: 8,
			label: 'Traveling',
			icon: 'material-symbols:card-travel',
		},
		{
			id: 9,
			label: 'Singing',
			icon: 'mingcute:microphone-fill',
		},
	];

	const options = [
		{
			value: "0",
			label: 'Eating',
			icon: 'icon-park-solid:fork-spoon',
		},
		{
			value: "1",
			label: 'Basketball',
			icon: 'mdi:basketball',
		},
		{
			value: "2",
			label: 'Video Games',
			icon: 'dashicons:games',
		},
		{
			value: "3",
			label: 'Volley Ball',
			icon: 'material-symbols:sports-volleyball',
		},
		{
			value: "4",
			label: 'Listening to Music',
			icon: 'ic:round-music-note',
		},
		{
			value: "5",
			label: 'Swimming',
			icon: 'fa-solid:swimmer',
		},
		{
			value: "6",
			label: 'Cooking',
			icon: 'icon-park-solid:cook',
		},
		{
			value: "7",
			label: 'Art',
			icon: 'map:art-gallery',
		},
		{
			value: "8",
			label: 'Traveling',
			icon: 'material-symbols:card-travel',
		},
		{
			value: "9",
			label: 'Singing',
			icon: 'mingcute:microphone-fill',
		},
	];

	return (
    <div className={className}>
			<Modal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Edit Hobbies"
      >
				<div className="mb-3">What do you love to do? Choose from the popular hobbies below or add others.</div>
				<SelectOptions onChange={handleSelectChange} isMulti options={options} value={selected} className="select"  classNamePrefix="select" />
			</Modal>
			<div className="mb-2 d-flex flex-wrap">
				{ hobbyList.map( item => (
					<div className="d-flex align-items-center border-1-solid-gray-4 me-2 mb-2 px-2 py-1 rounded-8px" key={item.id}>
						<div><Icon icon={item.icon} className="fs-16px me-1 text-gray-4" /></div>
						<div>{ item.label }</div>
					</div>
				)) }
			</div>
			<Button variant="light" className="w-100" onClick={ () => setShow(true) }>Edit Hobbies</Button>
		</div>
	)
}

interface Props {
	className?: string
}

export default Hobbies

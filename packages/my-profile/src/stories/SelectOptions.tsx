import React from 'react'
import Select from "react-select";
import { Icon } from '@iconify/react'

const SelectOptions = (props:any) => {
  const { isMulti, value, onChange, icon } = props;

  const handleRemoveValue = (e:any) => {
    if (!onChange) return;
    const { name: buttonName } = e.currentTarget;
    const removedValue = value.find((val:any) => val.value === buttonName);
    if (!removedValue) return;
    onChange(
      value.filter((val:any) => val.value !== buttonName),
      { name, action: "remove-value", removedValue }
    );
  };

  return (
		<div>
			<div className="d-flex flex-wrap">
				{isMulti
					? value.map((val:any) => (
						<div key={val.value} className="d-flex align-items-center border-1-solid-gray-4 me-2 mb-2 px-2 py-1 rounded-8px">
							<div><Icon icon={val.icon} className="fs-20px me-1 text-gray-4" /></div>
							<div>{val.label}</div>
							<button name={val.value} onClick={handleRemoveValue} className="btn-reset ms-2">
								<Icon icon="pepicons-pop:times" className="fs-20px" />
							</button>
						</div>
					))
				: null}
			</div>
			<Select {...props} controlShouldRenderValue={!isMulti} isClearable={false} />
		</div>
	);
};

export default SelectOptions;

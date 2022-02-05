import { memo } from 'react';
const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	console.log("Regukalar list called")
	return (
		<>
			{items.map((item) => (
				<ItemComponent key={item.id} {...{ [resourceName]: item }} />
			))}
		</>
	)
}

export default memo(RegularList);
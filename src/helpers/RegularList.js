import { memo } from 'react';
const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{items.map((item) => (
				<ItemComponent key={item.id} {...{ [resourceName]: item }} />
			))}
		</>
	)
}

export default memo(RegularList);
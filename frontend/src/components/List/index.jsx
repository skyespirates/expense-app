import { ListContainer, ListItem } from "./styled";
import Button from "@components/Button";
import PropTypes from "prop-types";
import { useListStore } from "@stores/store";

const List = ({ items = [] }) => {
  const removeItem = useListStore((state) => state.removeItem);
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem key={item.id}>
          {item.title} - {item.amount}{" "}
          <Button onClick={removeItem}>remove</Button>
        </ListItem>
      ))}
    </ListContainer>
  );
};

const listItemShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(listItemShape)),
};

export default List;

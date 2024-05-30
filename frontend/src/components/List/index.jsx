import { ListContainer, ListItem } from "./styled";
import Button from "@components/Button";
import PropTypes from "prop-types";
import { useListStore } from "@stores/store";
import { BiSolidTrashAlt, BiEdit } from "react-icons/bi";

const List = ({ items = [], openModal }) => {
  const removeItem = useListStore((state) => state.removeItem);
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem key={item.id}>
          {item.title} - {item.amount}{" "}
          <span>
            <Button onClick={openModal} size="sm">
              {" "}
              <BiEdit size="1.3em" />
            </Button>
            <Button onClick={() => removeItem(item.id)} size="sm">
              {" "}
              <BiSolidTrashAlt size="1.3em" />
            </Button>
          </span>
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
  openModal: PropTypes.func,
};

export default List;

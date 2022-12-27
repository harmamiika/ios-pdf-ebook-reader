import { Button, Card, Modal, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

const Header = (props: any) => {
  return (
    <View {...props}>
      <Text category="h6">Confirm delete</Text>
    </View>
  );
};

const Footer = ({
  setIsVisible,
  deleteBook,
  book,
  ...props
}: {
  setIsVisible: any;
  book: IBook | undefined;
  deleteBook: (book: IBook) => void;
}) => {
  const onDelete = () => {
    book && deleteBook(book);
    setIsVisible(false);
  };

  return (
    <View {...props}>
      <View style={s.footer}>
        <Button status="danger" onPress={onDelete}>
          <Text>Yes</Text>
        </Button>
        <Button status="basic" onPress={() => setIsVisible(false)}>
          <Text>Cancel</Text>
        </Button>
      </View>
    </View>
  );
};

interface DeleteModalProps {
  isVisible: boolean;
  book?: IBook;
  deleteBook: (book: IBook) => void;
  setIsVisible: (isVisible: boolean) => void;
}

export default function DeleteModal({
  isVisible,
  setIsVisible,
  deleteBook,
  book,
}: DeleteModalProps) {
  return (
    <Modal visible={isVisible} onBackdropPress={() => setIsVisible(false)}>
      <Card
        header={Header}
        footer={props => (
          <Footer
            book={book}
            setIsVisible={setIsVisible}
            {...props}
            deleteBook={deleteBook}
          />
        )}>
        <View>
          <MiikaText text={`Remove ${book?.name} from list?`} />
          <MiikaText text="(This does not remove the file from your phone)" />
        </View>
      </Card>
    </Modal>
  );
}

const s = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

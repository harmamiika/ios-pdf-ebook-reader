import { Button, Card, Modal, Text } from '@ui-kitten/components';
import React from 'react';
import { IBook } from '../../interfaces';

interface DeleteModalProps {
  isVisible: boolean;
  book: IBook;
  setVisible: (isVisible: boolean) => void;
}

export default function DeleteModal({
  isVisible,
  setVisible,
  book,
}: DeleteModalProps) {
  return (
    <Modal visible={isVisible} onBackdropPress={() => setVisible(false)}>
      <Card>
        <Button onPress={() => setVisible(false)}>
          <Text>Cancel</Text>
        </Button>
      </Card>
    </Modal>
  );
}

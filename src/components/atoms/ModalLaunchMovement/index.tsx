/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, TouchableOpacity, FlatList } from 'react-native';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';
import { IconClose } from '../IconClose';
import { GetMoviment } from '../../../services/useQuery';
import { IconDelete } from '../IconDelete';
import { FormatValue } from '../../../helpers/formatValue';
import { ButtonPrimary } from '../ButtonPrimary';

export const ModalLaunchMovement = () => {
  const [refresh, startRefresh] = useState(false);
  const { data } = GetMoviment();
  const startPositonRight = 450;
  const movementFromRight = useRef(new Animated.Value(startPositonRight)).current;
  const { toLaunchMovement, updateToLaunchMovement } = useStore();

  const styles = ComponentStyles();

  let newMoviment = data?.moviment;

  const handlesSendMoviment = () => {
    console.log(newMoviment);
  };

  const handleOpen = () => {
    Animated.spring(movementFromRight, {
      friction: 20,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(movementFromRight, {
      friction: 150,
      toValue: 450,
      useNativeDriver: false,
    }).start();
    updateToLaunchMovement();
  };

  useEffect(() => {
    let isOpened = false;
    if (!isOpened && toLaunchMovement) {
      handleOpen();
    }

    () => {
      isOpened = true;
    };
  }, [toLaunchMovement]);

  return (
    <>
      <Animated.View style={[styles.backView, { right: movementFromRight }]}>
        <View style={styles.frontView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Lançar no mês seguinte</Text>
              <TouchableOpacity
                onPress={() => {
                  handleClose();
                }}
              >
                <IconClose />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <View style={styles.header}>
                <Text style={styles.headerDelete} />
                <Text style={styles.headerDate}>Data</Text>
                <Text style={styles.headerCategory}>Categoria</Text>
                <Text style={styles.headerValue}>Valor</Text>
              </View>
              <FlatList
                style={styles.flatList}
                extraData={refresh}
                data={newMoviment}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.table}>
                      <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => {
                          newMoviment.splice(index, 1);
                          startRefresh(!refresh);
                        }}
                      >
                        <IconDelete />
                      </TouchableOpacity>
                      <Text style={styles.date}>
                        {item.dia}/{item.mes + 1}/{item.ano}
                      </Text>

                      <Text style={styles.category}>{item.categoria}</Text>
                      <Text style={styles.value}>{FormatValue(item.valor)}</Text>
                    </View>
                  );
                }}
              />
              <ButtonPrimary onPress={handlesSendMoviment}>Lançar</ButtonPrimary>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

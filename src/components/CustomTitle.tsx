import React from 'react'

import { StyleSheet, View } from 'react-native'

import { SpaceBetweenRow } from './Wrapper';
import MText from './Text';
import Button from './Button';
import { Colors } from '../styles';
import { Size } from '../constants';

interface SectionTitleProps {
  title: string;
  description?: string;
  viewAll?: string;
}

export default function CustomTitle({ title, description, viewAll }: SectionTitleProps) {
  return (
    <>
      <SpaceBetweenRow>
        <MText style={[styles.sectionTitle]}>{title}</MText>
        {viewAll && <Button
          title={viewAll}
          background={Colors.white}
          textStyle={styles.viewAll}
          style={styles.viewAllButton}
          onPress={() => { }}
        />}
      </SpaceBetweenRow>
      {description && <MText style={[styles.sectionSubTitle]}>
        {description}
      </MText>}
    </>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: Size.m,
    fontWeight: "700",
    marginTop: Size.xl
  },
  sectionSubTitle: {
    fontSize: Size.s12,
    fontWeight: "500",
    marginTop: Size.xs,
    marginBottom: Size.l,
    lineHeight: Size.s14 + Size.vs,
  },
  viewAllButton: {
    // height: Size.s,
  },
  viewAll: {
    color: Colors.primary,
    fontSize: Size.s12,
    fontWeight: "600",
    marginTop: Size.xl
  },
})
import React from 'react';
import styled from 'styled-components/native';
import { PressHandler, TouchEffect } from '../types/reactCommon.type';
import { brandColor, fontSize, systemColor } from '../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export type ButtonType =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'ghost';

interface ButtonProps {
	children: React.ReactNode;
	type?: ButtonType;
	touchEffect?: TouchEffect;
	width?: string;
	height?: string;
	onPress: PressHandler;
}

export default function Button({
	children,
	type = 'primary',
	touchEffect = 'opacity',
	width = '100%',
	height = '52px',
	onPress,
}: ButtonProps) {
	const Inner = () => {
		switch (type) {
			case 'primary':
				return (
					<BGPrimary
						width={width}
						height={height}
						colors={['#5257E1', '#764CD2', '#B63AB9']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<TextPrimary>{children}</TextPrimary>
					</BGPrimary>
				);
			case 'secondary':
				return (
					<BGSceondary width={width} height={height}>
						<TextSecondary>{children}</TextSecondary>
					</BGSceondary>
				);
			case 'tertiary':
				return (
					<BGTertiary width={width} height={height}>
						<TextTertiary>{children}</TextTertiary>
					</BGTertiary>
				);
			case 'danger':
				return (
					<BGDanger width={width} height={height}>
						<TextDanger>{children}</TextDanger>
					</BGDanger>
				);
			case 'ghost':
				return (
					<BGGhost width={width} height={height}>
						<TextGhost>{children}</TextGhost>
					</BGGhost>
				);
			default:
				return (
					<BGPrimary
						width={width}
						height={height}
						colors={['#5257E1', '#764CD2', '#B63AB9']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<TextPrimary>{children}</TextPrimary>
					</BGPrimary>
				);
		}
	};

	return (
		<>
			{touchEffect === 'opacity' && (
				<Opacity onPress={onPress}>{Inner()}</Opacity>
			)}
			{touchEffect === 'none' && <None onPress={onPress}>{Inner()}</None>}
		</>
	);
}

const Opacity = styled.TouchableOpacity`
	width: 100%;
`;

const None = styled.TouchableWithoutFeedback`
	width: 100%;
`;

interface BGProps {
	width: string;
	height: string;
}

const BGCommon = styled.View<BGProps>`
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: 8px;
`;

interface BGPrimaryProps {
	width: string;
	height: string;
}

const BGPrimary = styled(LinearGradient)<BGPrimaryProps>`
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: 12px 20px;
	border-radius: 8px;
`;

const BGSceondary = styled(BGCommon)`
	background-color: ${brandColor.secondary};
`;

const BGTertiary = styled(BGCommon)`
	background-color: ${brandColor.tertiary};
	border: 1px solid ${brandColor.primary};
`;

const BGDanger = styled(BGCommon)`
	background-color: ${systemColor.error};
`;

const BGGhost = styled(BGCommon)`
	background-color: transparent;
`;

const TextCommon = styled.Text`
	font-family: 'AppleSDGothicNeo-Medium';
	font-size: ${fontSize.xlarge};
`;

const TextPrimary = styled(TextCommon)`
	color: white;
`;

const TextSecondary = styled(TextCommon)`
	color: white;
`;

const TextTertiary = styled(TextCommon)`
	color: ${brandColor.primary};
`;

const TextDanger = styled(TextCommon)`
	color: white;
`;

const TextGhost = styled(TextCommon)`
	color: ${brandColor.primary};
`;

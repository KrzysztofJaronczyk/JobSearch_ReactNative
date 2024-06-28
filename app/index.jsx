import { ScrollView, View, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
	const router = useRouter()

	const handleMenuPress = () => {
		console.log('Menu button pressed')
	}

	const handleProfilePress = () => {
		console.log('Profile button pressed')
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' handlePress={handleMenuPress} />,
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' handlePress={handleProfilePress} />
					),
					headerTitle: '',
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home

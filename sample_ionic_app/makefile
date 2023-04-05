run-ios:
		npm run build
	 	ionic capacitor run ios -l --external

run-android:
		npm run build
	 	ionic capacitor run android -l --external

generate-ios:
	capacitor add ios

generate-android:
	capacitor add android

release-android:
	ionic capacitor run android

release-ios:
	ionic capacitor run ios

debug-apk:
		ionic build
	 	ionic capacitor add android
		ionic capacitor sync
		cd android
		./gradlew assembleDebug



# npx rimraf ./**/node_modules
# npm cache clear --force

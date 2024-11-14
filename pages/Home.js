import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ ...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Chinwe,</Text>
        <Text style={styles.question}>What would you like to <Text style={styles.highlight}>eat?</Text></Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.inputView}>
          <TextInput style={styles.searchInput} placeholder="Enter a dish name e.g. Egusi soup" />
          <FontAwesome name="microphone" size={24} color="#989898" style={{ position: 'absolute', right: 10, top: '25%' }} />
          <FontAwesome name="search" size={24} color="#989898" style={{ position: 'absolute', left: 10, top: '25%' }} />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <MaterialIcons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeButton]}>
          <Text style={[styles.categoryText, styles.activeText]}>Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Sides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Salad</Text>
        </TouchableOpacity>
      </ScrollView>



      <View style={styles.popularNow}>
        <Text style={styles.sectionTitle}>Today's Special Offer</Text>
      </View>

      {/* Special Offer */}
      <View style={styles.specialOfferView}>
        <View style={styles.specialOffer}>
          <Image style={styles.offerImage} source={{ uri: 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg' }} />
          <View style={styles.offerDetails}>
            <Text style={styles.offerTitle}>Yummies Special Burger</Text>
            <Text style={styles.offerTime}>Now</Text>
            <Text style={styles.offerPrice}>N1,800</Text>
            <Text style={styles.discount}>(10% off)</Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Popular Now */}
      <View style={styles.popularNow}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <TouchableOpacity>
          <Text style={styles.fullMenu}>SEE FULL MENU &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularItems}>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={{ uri: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg' }} />
          <Text style={styles.itemName}>Cream Cheese Tart</Text>
          <Text style={styles.itemPrice}>N1,200</Text>
          <FontAwesome style={styles.heartIcon} name="heart-o" size={22} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={{ uri: 'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg' }} />
          <Text style={styles.itemName}>Ratatouille</Text>
          <Text style={styles.itemPrice}>N1,500</Text>
          <FontAwesome style={styles.heartIcon} name="heart" size={22} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={{ uri: 'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg' }} />
          <Text style={styles.itemName}>Gołąbki (cabbage roll)</Text>
          <Text style={styles.itemPrice}>N600</Text>
          <FontAwesome style={styles.heartIcon} name="heart-o" size={22} color="orange" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="wechat" size={24} color="#333" />
          <Text style={styles.navText}>Live Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={24} color="#333" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#FF5722" />
          <Text style={[styles.navText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="restaurant-menu" size={24} color="#333" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="heart-o" size={24} color="#333" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { marginBottom: 16 },
  greeting: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  question: { fontSize: 34, fontWeight: 'bold' },
  highlight: { color: '#FF5722' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  inputView: {
    flex: 1,
    elevation: 3,
    borderRadius: 8,
    shadowColor: '#171717',
  },
  searchInput: { borderRadius: 8, padding: 10, paddingLeft: 45, paddingRight: 40, backgroundColor: 'white' },
  filterIcon: { marginLeft: 8, padding: 10, backgroundColor: '#FF5722', borderRadius: 8 },
  categories: {
    maxHeight: 50,
    marginBottom: 18,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    paddingVertical: 7,
    paddingHorizontal: 16,
    height: 35,
    marginLeft: 4,
    marginRight: 4
  },
  activeButton: {
    backgroundColor: '#FF5722',
  },
  categoryText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  specialOfferView: {
    elevation: 6,
    borderRadius: 30,
    shadowColor: '#171717',
    marginBottom: 16
  },
  specialOffer: { flexDirection: 'row', borderRadius: 30, backgroundColor: 'white', },
  offerImage: { width: '50%', height: 170, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 },
  offerDetails: { flex: 1, width: '50%', alignItems: 'center', position: 'relative' },
  offerTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', paddingTop: 8 },
  offerTime: { fontSize: 12, fontWeight: 'bold', color: '#333', marginTop: 10 },
  offerPrice: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  discount: { color: '#FF5722', fontSize: 12, fontWeight: 'bold' },
  addToCartButton: { marginTop: 8, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 8, position: 'absolute', bottom: 14, borderColor: '#FF5722', borderWidth: 2 },
  addToCartText: { color: '#FF5722', textAlign: 'center', fontWeight: 'bold' },
  popularNow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  fullMenu: { color: '#FF5722' },
  popularItems: { flexDirection: 'row' },
  item: { elevation: 3, marginRight: 8, marginLeft: 8, width: 180, height: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', position: 'relative' },
  itemImage: { width: 100, resizeMode: 'contain', height: 100, borderRadius: 8, marginBottom: 8 },
  itemName: { fontSize: 16, color: '#333' },
  itemPrice: { fontWeight: 'bold', fontSize: 16 },
  heartIcon: { position: 'absolute', top: 7, right: 7 },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, },
  navText: { color: '#333', fontSize: 12, marginTop: 4 },
  activeNavText: { color: '#FF5722' },
});

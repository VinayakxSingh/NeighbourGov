import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/initiative.css";

// Sample issues
const sampleIssues = [
  {
    id: "1",
    title: "Broken Streetlights",
    description: "Multiple non-functional lights in Sector 15.",
    location: "Sector 15, Jaipur, Rajasthan",
    category: "Infrastructure",
  },
  {
    id: "2",
    title: "Water Leakage",
    description: "Pipeline leakage causing waterlogging.",
    location: "MG Road, Delhi, Delhi",
    category: "Water",
  },
  {
    id: "3",
    title: "Improper Garbage Collection",
    description: "Bins not cleared regularly, leading to hygiene issues.",
    location: "Kothrud, Pune, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "4",
    title: "Potholes in Road",
    description: "Potholes creating traffic hazards.",
    location: "Indira Nagar, Lucknow, Uttar Pradesh",
    category: "Infrastructure",
  },
  {
    id: "5",
    title: "Water Supply Shortage",
    description: "Irregular water supply in the area.",
    location: "Koramangala, Bangalore, Karnataka",
    category: "Water",
  },
  {
    id: "6",
    title: "Street Cleaning Issues",
    description: "Uncollected trash on roadsides.",
    location: "Vashi, Mumbai, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "7",
    title: "Street Lighting Issues",
    description: "Non-functional streetlights in the neighborhood.",
    location: "Connaught Place, Delhi, Delhi",
    category: "Infrastructure",
  },
  {
    id: "8",
    title: "Damaged Road",
    description: "Potholes and cracks all over the main road.",
    location: "Rajaji Nagar, Bangalore, Karnataka",
    category: "Infrastructure",
  },
  {
    id: "9",
    title: "Sewer Blockage",
    description: "Sewer lines are blocked, causing a foul smell.",
    location: "Goregaon, Mumbai, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "10",
    title: "Water Pooling",
    description: "Water collects in the streets after every rain.",
    location: "Andheri, Mumbai, Maharashtra",
    category: "Water",
  },
  {
    id: "11",
    title: "Illegal Parking",
    description: "People are parking in no-parking zones.",
    location: "Banjara Hills, Hyderabad, Telangana",
    category: "Infrastructure",
  },
  {
    id: "12",
    title: "No Public Transport",
    description: "No easy access to public transportation in this area.",
    location: "Madhapur, Hyderabad, Telangana",
    category: "Infrastructure",
  },
  {
    id: "13",
    title: "Littering",
    description: "Residents are not following proper waste disposal norms.",
    location: "Navi Mumbai, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "14",
    title: "Damaged Footpath",
    description: "Sidewalks have been damaged due to erosion.",
    location: "Frazer Town, Bangalore, Karnataka",
    category: "Infrastructure",
  },
  {
    id: "15",
    title: "Unsafe School Zone",
    description: "No safety measures near the school crossing.",
    location: "Gurgaon, Haryana",
    category: "Infrastructure",
  },
  {
    id: "16",
    title: "Unlit Parks",
    description: "Public parks have no street lights in the evening.",
    location: "Whitefield, Bangalore, Karnataka",
    category: "Infrastructure",
  },
  {
    id: "17",
    title: "Uncollected Garbage",
    description: "Garbage collection is delayed frequently.",
    location: "Dwarka, Delhi, Delhi",
    category: "Sanitation",
  },
  {
    id: "18",
    title: "Poor Water Quality",
    description: "Water quality in taps is questionable.",
    location: "Vijayawada, Andhra Pradesh",
    category: "Water",
  },
  {
    id: "19",
    title: "Street Vendor Encroachment",
    description: "Street vendors occupying footpaths.",
    location: "Chandni Chowk, Delhi, Delhi",
    category: "Infrastructure",
  },
  {
    id: "20",
    title: "Noise Pollution",
    description: "Loud music and honking create disturbance.",
    location: "T Nagar, Chennai, Tamil Nadu",
    category: "Environment",
  },
  {
    id: "21",
    title: "Poor Drainage System",
    description: "Drainage systems frequently overflow.",
    location: "Chandigarh, Chandigarh",
    category: "Sanitation",
  },
  {
    id: "22",
    title: "Street Repair Needed",
    description: "The streets have cracks and are unpaved.",
    location: "Bhubaneswar, Odisha",
    category: "Infrastructure",
  },
  {
    id: "23",
    title: "Lack of Green Spaces",
    description: "Too few parks and green spaces for residents.",
    location: "Pune, Maharashtra",
    category: "Environment",
  },
  {
    id: "24",
    title: "Fire Hazards",
    description: "Buildings are not up to fire safety standards.",
    location: "Sector 17, Noida, Uttar Pradesh",
    category: "Safety",
  },
  {
    id: "25",
    title: "Public Restrooms",
    description: "There is a lack of public restrooms in the area.",
    location: "Banjara Hills, Hyderabad, Telangana",
    category: "Infrastructure",
  },
  {
    id: "26",
    title: "Damaged Bus Stop",
    description: "Bus stop shelters are broken.",
    location: "Koramangala, Bangalore, Karnataka",
    category: "Infrastructure",
  },
  {
    id: "27",
    title: "Animal Encroachment",
    description: "Stray dogs and other animals create a nuisance.",
    location: "Sector 50, Noida, Uttar Pradesh",
    category: "Environment",
  },
  {
    id: "28",
    title: "Water Scarcity",
    description: "The area faces water shortages in summer.",
    location: "Vijayawada, Andhra Pradesh",
    category: "Water",
  },
  {
    id: "29",
    title: "Dengue Outbreak",
    description: "Dengue fever cases have been increasing.",
    location: "Gurgaon, Haryana",
    category: "Health",
  },
  {
    id: "30",
    title: "Lack of Streetlights",
    description: "Streetlights are frequently malfunctioning.",
    location: "Saket, Delhi, Delhi",
    category: "Infrastructure",
  },
  {
    id: "31",
    title: "Potholes",
    description: "Multiple potholes on the main road.",
    location: "T Nagar, Chennai, Tamil Nadu",
    category: "Infrastructure",
  },
  {
    id: "32",
    title: "Illegal Construction",
    description: "There is an illegal building construction underway.",
    location: "Kochi, Kerala",
    category: "Construction",
  },
  {
    id: "33",
    title: "Unmaintained Gardens",
    description: "Public gardens are poorly maintained.",
    location: "Kolkata, West Bengal",
    category: "Environment",
  },
  {
    id: "34",
    title: "Traffic Congestion",
    description: "There is heavy traffic congestion during peak hours.",
    location: "Chennai, Tamil Nadu",
    category: "Infrastructure",
  },
  {
    id: "35",
    title: "Public Toilets Unclean",
    description: "Public toilets are unhygienic and unclean.",
    location: "Sector 62, Noida, Uttar Pradesh",
    category: "Sanitation",
  },
  {
    id: "36",
    title: "Water Contamination",
    description: "Contaminated water supply causing health issues.",
    location: "Pune, Maharashtra",
    category: "Water",
  },
  {
    id: "37",
    title: "Polluted Air",
    description: "Air quality is poor due to industrial pollution.",
    location: "Faridabad, Haryana",
    category: "Environment",
  },
  {
    id: "38",
    title: "Unhygienic Food Stalls",
    description: "Street food stalls are unhygienic.",
    location: "Kolkata, West Bengal",
    category: "Sanitation",
  },
  {
    id: "39",
    title: "Lack of Child Safety",
    description: "No proper safety measures around playgrounds.",
    location: "Bhopal, Madhya Pradesh",
    category: "Safety",
  },
  {
    id: "40",
    title: "Pedestrian Safety",
    description: "No safe crossings for pedestrians.",
    location: "Vadodara, Gujarat",
    category: "Safety",
  },
  {
    id: "41",
    title: "Public Garbage Bins",
    description: "There is a shortage of public garbage bins.",
    location: "Pune, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "42",
    title: "School Overcrowding",
    description: "Schools in the area are overcrowded.",
    location: "Delhi, Delhi",
    category: "Education",
  },
  {
    id: "43",
    title: "Lack of Sports Facilities",
    description: "There are no proper sports facilities in the area.",
    location: "Nagpur, Maharashtra",
    category: "Recreation",
  },
  {
    id: "44",
    title: "Garbage Overflow",
    description: "Garbage piles up on the streets.",
    location: "Indore, Madhya Pradesh",
    category: "Sanitation",
  },
  {
    id: "45",
    title: "Speeding Vehicles",
    description: "Vehicles are speeding through residential areas.",
    location: "Surat, Gujarat",
    category: "Traffic",
  },
  {
    id: "46",
    title: "Insufficient Bus Routes",
    description: "There are not enough buses for commuters.",
    location: "Ahmedabad, Gujarat",
    category: "Transportation",
  },
  {
    id: "47",
    title: "Non-functional Streetlights",
    description: "Streetlights don't work, causing safety issues.",
    location: "Noida, Uttar Pradesh",
    category: "Infrastructure",
  },
  {
    id: "48",
    title: "Dirty Water Supply",
    description: "Water supply is contaminated with dirt.",
    location: "Vijayawada, Andhra Pradesh",
    category: "Water",
  },
  {
    id: "49",
    title: "Water Tank Leakage",
    description: "Water tanks have cracks and are leaking.",
    location: "Jodhpur, Rajasthan",
    category: "Water",
  },
  {
    id: "50",
    title: "No Street Vendors",
    description: "Street vendors are not allowed in the area.",
    location: "Kochi, Kerala",
    category: "Infrastructure",
  },
  {
    id: "51",
    title: "Lack of Green Areas",
    description: "There are no parks or green areas.",
    location: "Surat, Gujarat",
    category: "Environment",
  },
  {
    id: "52",
    title: "Unsafe Buildings",
    description: "Buildings are not up to safety standards.",
    location: "Kolkata, West Bengal",
    category: "Safety",
  },
  {
    id: "53",
    title: "Flooding",
    description: "Heavy rains have caused flooding in low-lying areas.",
    location: "Bhubaneswar, Odisha",
    category: "Water",
  },
  {
    id: "54",
    title: "No Public Libraries",
    description: "There are no public libraries in the area.",
    location: "Raipur, Chhattisgarh",
    category: "Education",
  },
  {
    id: "55",
    title: "Poor Road Conditions",
    description: "Roads are not maintained and have deep potholes.",
    location: "Kochi, Kerala",
    category: "Infrastructure",
  },
  {
    id: "56",
    title: "Dangerous Crosswalk",
    description: "Pedestrian crossings are unsafe.",
    location: "Bangalore, Karnataka",
    category: "Safety",
  },
  {
    id: "57",
    title: "Illegal Dumping",
    description: "People are dumping garbage in unauthorized areas.",
    location: "Nagpur, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "58",
    title: "Public Drinking",
    description: "People are drinking alcohol in public spaces.",
    location: "Mumbai, Maharashtra",
    category: "Safety",
  },
  {
    id: "59",
    title: "Potholes in Parks",
    description: "The park paths have large potholes.",
    location: "Indore, Madhya Pradesh",
    category: "Infrastructure",
  },
  {
    id: "60",
    title: "Illegal Parking",
    description: "People are parking in no-parking zones.",
    location: "Bangalore, Karnataka",
    category: "Traffic",
  },
  {
    id: "61",
    title: "Street Children",
    description: "A lot of children are roaming on the streets unsupervised.",
    location: "Mumbai, Maharashtra",
    category: "Safety",
  },
  {
    id: "62",
    title: "Lack of Hospitals",
    description: "There are no hospitals in the vicinity.",
    location: "Bhopal, Madhya Pradesh",
    category: "Healthcare",
  },
  {
    id: "63",
    title: "No WiFi Access",
    description: "Public places do not offer WiFi.",
    location: "Hyderabad, Telangana",
    category: "Technology",
  },
  {
    id: "64",
    title: "Lack of Street Cleaners",
    description: "Streets are not cleaned regularly.",
    location: "Delhi, Delhi",
    category: "Sanitation",
  },
  {
    id: "65",
    title: "Public Drinking Water",
    description: "There is no access to public drinking water.",
    location: "Bhubaneswar, Odisha",
    category: "Water",
  },
  {
    id: "66",
    title: "Overcrowded Public Transport",
    description: "Public buses and trains are overcrowded.",
    location: "Chennai, Tamil Nadu",
    category: "Transportation",
  },
  {
    id: "67",
    title: "Lack of Recycling Bins",
    description: "There are no bins for recycling waste.",
    location: "Nagpur, Maharashtra",
    category: "Sanitation",
  },
  {
    id: "68",
    title: "Traffic Lights Malfunction",
    description: "Traffic lights are not working correctly.",
    location: "Ahmedabad, Gujarat",
    category: "Traffic",
  },
  {
    id: "69",
    title: "Lack of Fire Stations",
    description: "There is no fire station nearby.",
    location: "Jodhpur, Rajasthan",
    category: "Safety",
  },
  {
    id: "70",
    title: "Poor Night Security",
    description: "There is no security at night.",
    location: "Gurgaon, Haryana",
    category: "Safety",
  },
  {
    id: "71",
    title: "Unsafe Street Corners",
    description: "Street corners are poorly lit and dangerous.",
    location: "Jaipur, Rajasthan",
    category: "Safety",
  },
  {
    id: "72",
    title: "Missing Street Signs",
    description: "Street signs are missing or illegible.",
    location: "Kolkata, West Bengal",
    category: "Infrastructure",
  },
  {
    id: "73",
    title: "Road Repair Delay",
    description: "Road repairs have been delayed for months.",
    location: "Vadodara, Gujarat",
    category: "Infrastructure",
  },
  {
    id: "74",
    title: "Street Drainage Issues",
    description: "Street drainage systems need repairs.",
    location: "Raipur, Chhattisgarh",
    category: "Sanitation",
  },
  {
    id: "75",
    title: "Lack of CCTV Cameras",
    description: "There are no CCTV cameras in public areas.",
    location: "Pune, Maharashtra",
    category: "Safety",
  },
  {
    id: "76",
    title: "No Public Transport",
    description: "There are no public transport options.",
    location: "Varanasi, Uttar Pradesh",
    category: "Transportation",
  },
  {
    id: "77",
    title: "Animal Waste on Roads",
    description: "Animal waste is frequently found on roads.",
    location: "Chandigarh, Chandigarh",
    category: "Sanitation",
  },
  {
    id: "78",
    title: "Broken Water Pipes",
    description: "Water pipes have burst, causing water wastage.",
    location: "Patna, Bihar",
    category: "Water",
  },
  {
    id: "79",
    title: "Potholes in School Zone",
    description: "There are potholes in the school zone.",
    location: "Lucknow, Uttar Pradesh",
    category: "Infrastructure",
  },
  {
    id: "80",
    title: "Overcrowded Slums",
    description: "Slum areas are overcrowded and unhygienic.",
    location: "Delhi, Delhi",
    category: "Housing",
  },
  {
    id: "81",
    title: "Illegal Factories",
    description: "Illegal factories polluting the environment.",
    location: "Bhubaneswar, Odisha",
    category: "Environment",
  },
  {
    id: "82",
    title: "No Public Parks",
    description: "There are no parks or recreational areas.",
    location: "Rajkot, Gujarat",
    category: "Recreation",
  },
  {
    id: "83",
    title: "Underdeveloped Roads",
    description: "Roads are not developed properly in many areas.",
    location: "Jammu, Jammu & Kashmir",
    category: "Infrastructure",
  },
  {
    id: "84",
    title: "Unsafe Playgrounds",
    description: "Playgrounds do not meet safety standards.",
    location: "Kanpur, Uttar Pradesh",
    category: "Safety",
  },
  {
    id: "85",
    title: "Unreliable Waste Collection",
    description: "Waste collection is unreliable and delayed.",
    location: "Chennai, Tamil Nadu",
    category: "Sanitation",
  },
  {
    id: "86",
    title: "Pollution from Factories",
    description: "Factories emitting harmful pollutants into the air.",
    location: "Mumbai, Maharashtra",
    category: "Environment",
  },
  {
    id: "87",
    title: "No Cycle Lanes",
    description: "There are no dedicated lanes for cyclists.",
    location: "Ahmedabad, Gujarat",
    category: "Transportation",
  },
  {
    id: "88",
    title: "Lack of Fire Safety",
    description: "Buildings are lacking fire safety equipment.",
    location: "Bhopal, Madhya Pradesh",
    category: "Safety",
  },
  {
    id: "89",
    title: "Broken Public Infrastructure",
    description: "Public infrastructure is in a state of disrepair.",
    location: "Gurgaon, Haryana",
    category: "Infrastructure",
  },
  {
    id: "90",
    title: "Pollution in River",
    description: "The local river is polluted with garbage.",
    location: "Patna, Bihar",
    category: "Environment",
  },
  {
    id: "91",
    title: "Lack of Street Furniture",
    description: "There are no benches or other furniture on streets.",
    location: "Hyderabad, Telangana",
    category: "Infrastructure",
  },
  {
    id: "92",
    title: "Lack of School Amenities",
    description: "Schools do not have adequate facilities.",
    location: "Delhi, Delhi",
    category: "Education",
  },
  {
    id: "93",
    title: "Disorganized Traffic",
    description: "Traffic flow is disorganized and chaotic.",
    location: "Bangalore, Karnataka",
    category: "Traffic",
  },
  {
    id: "94",
    title: "Poor Air Quality",
    description: "Air quality is poor due to vehicular emissions.",
    location: "Faridabad, Haryana",
    category: "Environment",
  },
  {
    id: "95",
    title: "Non-compliance of Rules",
    description: "Local residents are not following rules and regulations.",
    location: "Nagpur, Maharashtra",
    category: "Safety",
  },
  {
    id: "96",
    title: "Unhygienic Public Toilets",
    description: "Public toilets are not maintained properly.",
    location: "Jaipur, Rajasthan",
    category: "Sanitation",
  },
  {
    id: "97",
    title: "Flood-prone Area",
    description: "The area is prone to flooding during monsoons.",
    location: "Patna, Bihar",
    category: "Water",
  },
  {
    id: "98",
    title: "Unnecessary Roadblocks",
    description: "Roadblocks are placed in inconvenient areas.",
    location: "Kolkata, West Bengal",
    category: "Infrastructure",
  },
  {
    id: "99",
    title: "Bad Traffic Signals",
    description: "Traffic lights do not work or are missing.",
    location: "Vijayawada, Andhra Pradesh",
    category: "Traffic",
  },
  {
    id: "100",
    title: "Lack of Public Safety",
    description: "Public spaces lack adequate safety measures.",
    location: "Indore, Madhya Pradesh",
    category: "Safety",
  },
];

const Initiative = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIssues, setFilteredIssues] = useState([]);

  // Filter issues based on search query
  useEffect(() => {
    if (searchQuery) {
      const match = sampleIssues.filter((issue) =>
        issue.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredIssues(match.slice(0, 5)); // Only show first 5 matches
    } else {
      setFilteredIssues([]);
    }
  }, [searchQuery]);

  return (
    <section className="initiatives-page">
      <h2>Community Initiatives</h2>
      <p>See what others are raising in your neighborhood!</p>

      {/* Location Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="issues-grid">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => (
            <Link
              to={`/voting/${issue.id}`}
              key={issue.id}
              className="issue-link"
            >
              <div className="issue-card">
                <h3>{issue.title}</h3>
                <p>
                  <strong>Location:</strong> {issue.location}
                </p>
                <p>
                  <strong>Category:</strong> {issue.category}
                </p>
                <p>{issue.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No issues found for the location you searched.</p>
        )}
      </div>
    </section>
  );
};

export default Initiative;

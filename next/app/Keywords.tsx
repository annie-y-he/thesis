// x: intrasubject - interobject
// y: intraobject - intersubject
// z: subject - object
import { Vector3 as V3 } from 'three';
export const topoKeywords = [
  {word: "transporation", pos: new V3(0.5,0.7,0.4)},
  {word: "narrative history", pos: new V3(-0.1,0.9,-0.3)},
  {word: "social media", pos: new V3(-0.1,0.9,0)},
  {word: "portal technology", pos: new V3(0.9,-0.6,0.7)},
  {word: "government regulation", pos: new V3(0.4,0.7,-0.3)},
  {word: "spacial topology", pos: new V3(0.2,-0.1,0.9)},
  {word: "geographic information", pos: new V3(0.5,-0.6,0.9)},
  {word: "code & planning", pos: new V3(0.1,0.2,0.4)},
  {word: "manipulative advertising", pos: new V3(0.3,0.9,-0.7)},
  {word: "product assembly", pos: new V3(0.6,0,0.1)},
]
export const metaKeywords = [
  {word: "digital logic", pos: new V3(0.4,-0.2,0.9)},
  {word: "human memory", pos: new V3(-0.9,-0.2,0)},
  {word: "photogrammetry", pos: new V3(0.1,-0.9,0.2)},
  {word: "hardware software interface", pos: new V3(0.4,-0.1,0.3)},
  {word: "neurotechnology", pos: new V3(-0.4,-0.6,0.2)},
  {word: "time", pos: new V3(0,-0.3,0.9)},
  {word: "computer memory", pos: new V3(0.2,-0.7,0.5)},
  {word: "causality", pos: new V3(-0.2,-0.1,0.9)},
  {word: "chronological narrative", pos: new V3(-0.4,0.3,0.6)},
  {word: "context morphing", pos: new V3(-0.8,-0.4,-0.2)},
]
export const pataKeywords = [
  {word: "internet browsing", pos: new V3(0.1,0.5,-0.9)},
  {word: "asynchronous communication", pos: new V3(-0.3,0.8,0.2)},
  {word: "interpersonal relationship", pos: new V3(-0.4,0.9,-0.3)},
  {word: "large language model", pos: new V3(-0.3,-0.4,0.3)},
  {word: "consciousness", pos: new V3(-0.9,0.2,0.5)},
  {word: "turing test", pos: new V3(-0.9,-0.2,0.2)},
  {word: "interactive sensing", pos: new V3(-0.3,0.1,-0.8)},
  {word: "personality", pos: new V3(-0.7,0.1,-0.3)},
  {word: "online identity", pos: new V3(-0.2,0.9,-0.1)},
  {word: "linguistic comprehension", pos: new V3(-0.3,0.4,-0.3)},
]
export const uniKeywords = [
  {word: "cell biology", pos: new V3(0.9,-0.2,-0.6)},
  {word: "scientific research", pos: new V3(0.8,0.4,-0.6)},
  {word: "taxonomy", pos: new V3(0.6,-0.9,0.2)},
  {word: "celluar automata", pos: new V3(0.6,-0.9,0.8)},
  {word: "sensory receptors", pos: new V3(0.2,-0.3,-0.9)},
  {word: "object-oriented ontology", pos: new V3(0.7,0.2,0.9)},
  {word: "biomimicry", pos: new V3(-0.3,-0.6,-0.9)},
  {word: "chronology", pos: new V3(0.9,0.3,0.3)},
  {word: "intercellular language", pos: new V3(0.2,-0.8,-0.6)},
  {word: "cultural assimilation", pos: new V3(0.8,0.9,-0.1)},
]
export const keywordsColor: {[key: string]: string}  = {
  TOPOVERSE: '#61E294',
  METAVERSE: '#E54F6D',
  PATAVERSE: '#F8C630',
  UNIVERSE: '#724E91'
}